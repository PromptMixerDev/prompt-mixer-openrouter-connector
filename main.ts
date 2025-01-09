import OpenAI from 'openai';
import { config } from './config';
import { ChatCompletion } from 'openai/resources';

const OPENROUTER_API_KEY = 'OPENROUTER_API_KEY';
const SITE_URL = 'SITE_URL';
const SITE_NAME = 'SITE_NAME';

interface Message {
  role: string;
  content: string;
}

interface Completion {
  Content: string | null;
  Error?: string | undefined;
  TokenUsage: number | undefined;
}

interface ConnectorResponse {
  Completions: Completion[];
  ModelType: string;
}

interface ErrorCompletion {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error: string;
  model: string;
  usage: undefined;
}

const mapToResponse = (
  outputs: Array<ChatCompletion | ErrorCompletion>,
  model: string,
): ConnectorResponse => {
  return {
    Completions: outputs.map((output) => {
      if ('error' in output) {
        return {
          Content: null,
          TokenUsage: undefined,
          Error: output.error,
        };
      } else {
        return {
          Content: output.choices[0]?.message?.content || null,
          TokenUsage: output.usage?.total_tokens,
        };
      }
    }),
    ModelType: outputs[0].model || model,
  };
};

const mapErrorToCompletion = (error: any, model: string): ErrorCompletion => {
  const errorMessage = error.message || JSON.stringify(error);
  return {
    choices: [],
    error: errorMessage,
    model,
    usage: undefined,
  };
};

async function main(
  model: string,
  prompts: string[],
  properties: Record<string, unknown>,
  settings: Record<string, unknown>,
): Promise<ConnectorResponse> {
  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: settings?.[OPENROUTER_API_KEY] as string,
    defaultHeaders: {
      'HTTP-Referer': settings?.[SITE_URL] as string || 'https://github.com/prompt-mixer',
      'X-Title': settings?.[SITE_NAME] as string || 'Prompt Mixer',
    }
  });

  const { prompt, ...restProperties } = properties;
  const systemPrompt = (prompt || config.properties.find((prop) => prop.id === 'prompt')?.value) as string;
  const messageHistory: Message[] = [{ role: 'system', content: systemPrompt }];
  const outputs: Array<ChatCompletion | ErrorCompletion> = [];

  try {
    for (let index = 0; index < prompts.length; index++) {
      try {
        messageHistory.push({ role: 'user', content: prompts[index] });
        const chatCompletion = await openai.chat.completions.create({
          messages: messageHistory as unknown as [],
          model: model,
          ...restProperties,
        });

        const assistantResponse = chatCompletion.choices[0].message.content || 'No response.';
        messageHistory.push({ role: 'assistant', content: assistantResponse });
        outputs.push(chatCompletion);
      } catch (error) {
        console.error('Error in completion:', error);
        const completionWithError = mapErrorToCompletion(error, model);
        outputs.push(completionWithError);
      }
    }

    return mapToResponse(outputs, model);
  } catch (error) {
    console.error('Error in main function:', error);
    const completionWithError = mapErrorToCompletion(error, model);
    return mapToResponse([completionWithError], model);
  }
}

export { main, config };
