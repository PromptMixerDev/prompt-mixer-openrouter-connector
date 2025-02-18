export const config = {
  connectorName: 'OpenRouter',
  connectorVersion: '1.0.2',
  models: [
    'openrouter/auto',
    'deepseek/deepseek-chat',
    'sao10k/l3.1-70b-hanami-x1',
    'qwen/qvq-72b-preview',
    'meta-llama/llama-3.3-70b-instruct',
    'openai/o3-mini-high',
    'deepseek/deepseek-r1-distill-qwen-1.5b',
    'deepseek/deepseek-r1-distill-qwen-32b',
    'deepseek/deepseek-r1-distill-llama-70b:free',
    'deepseek/deepseek-r1-distill-llama-70b',
    'deepseek/deepseek-r1',
    'mistralai/codestral-2501',
    'microsoft/phi-4'
  ],
  description:
    'OpenRouter Connector for Prompt Mixer - Access multiple AI models through a single API',
  author: 'Prompt Mixer',
  properties: [
    {
      id: 'prompt',
      name: 'System Prompt',
      value: 'You are a helpful assistant.',
      type: 'string',
    },
    {
      id: 'max_tokens',
      name: 'Max Tokens',
      value: 4096,
      type: 'number',
    },
    {
      id: 'temperature',
      name: 'Temperature',
      value: 0.7,
      type: 'number',
    },
    {
      id: 'top_p',
      name: 'Top P',
      value: 1,
      type: 'number',
    },
    {
      id: 'frequency_penalty',
      name: 'Frequency Penalty',
      value: 0.5,
      type: 'number',
    },
    {
      id: 'presence_penalty',
      name: 'Presence Penalty',
      value: 0.5,
      type: 'number',
    },
    {
      id: 'stop',
      name: 'Stop Sequences',
      value: ['\n'],
      type: 'array',
    }
  ],
  settings: [
    {
      id: 'OPENROUTER_API_KEY',
      name: 'OpenRouter API Key',
      value: '',
      type: 'string',
    },
    {
      id: 'SITE_URL',
      name: 'Site URL',
      value: '',
      type: 'string',
      description: 'Optional. Site URL for rankings on openrouter.ai'
    },
    {
      id: 'SITE_NAME',
      name: 'Site Name',
      value: '',
      type: 'string',
      description: 'Optional. Site title for rankings on openrouter.ai'
    }
  ],
  iconBase64:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjg4ODkgNy40MDE1M0wxNS4yNTI0IDQuODgyMjZMMTAuODg4OSAyLjM2MzAxVjMuNTE3MDlDOS4yNDczMiAzLjQ0NzQzIDcuNTU2MiAzLjUwOTg0IDUuNjMwMjIgNC44NzY2NUMzLjkyMjI3IDYuMDg4NzUgMy45MTgzMiA2LjA5MDk4IDMuMTkxNjMgNi41MDI1OUMzLjE3MTI1IDYuNTE0MTQgMy4xNTAyOSA2LjUyNiAzLjEyODcyIDYuNTM4MjNDMi44NDY1MiA2LjY5ODE0IDIuMzQ3ODMgNi44Nzc0MSAxLjgwODM3IDcuMDIxMTJDMS41NTE4MyA3LjA4OTQ3IDEuMzExOTkgNy4xNDI5MiAxLjEyMDAyIDcuMTc4MzVDMC45NTc4NDkgNy4yMDgyOCAwLjg2OTI4NiA3LjIxNzg3IDAuODQxOTkxIDcuMjIwODNDMC44MzI1MzMgNy4yMjE4NiAwLjgzMDQzMiA3LjIyMjA4IDAuODM1MTczIDcuMjIyMDhWNy4yMjU1QzAuODA1NjE5IDcuMjI0MjggMC43NzcyMDEgNy4yMjM2NSAwLjc1MDAzMiA3LjIyMzY1VjkuNzc3ODhDMC43NDUyOTIgOS43Nzc4OCAwLjc0NzM5MSA5Ljc3ODExIDAuNzU2ODQ1IDkuNzc5MTNDMC43ODQxNCA5Ljc4MjA5IDAuODcyNzA4IDkuNzkxNjkgMS4wMzQ4OCA5LjgyMTYyQzEuMjI2ODUgOS44NTcwNCAxLjQ2NjY5IDkuOTEwNSAxLjcyMzIzIDkuOTc4ODRDMi4yNjI2OSAxMC4xMjI2IDIuNzYxMzggMTAuMzAxOCAzLjA0MzU4IDEwLjQ2MTdMMy4xMDY0OSAxMC40OTc0QzMuODMzMTggMTAuOTA5IDMuODM3MTIgMTAuOTExMiA1LjU0NTA4IDEyLjEyMzNDNy40NzEwNiAxMy40OTAxIDkuMTYyMTggMTMuNTUyNSAxMC44MDM4IDEzLjQ4MjlWMTQuNjM3TDE1LjE2NzMgMTIuMTE3N0wxMC44MDM4IDkuNTk4NDZWMTAuOTA4M0M5LjIzMTYgMTAuOTc3MiA4LjM2Nzc3IDEwLjk5NDQgNy4wMjMzMyAxMC4wNDAzTDYuOTk5MzkgMTAuMDIzM0M1LjYzODcyIDkuMDU3NjkgNS4zMTIzNiA4LjgyNjA4IDQuODAwMzkgOC41MjQ4NkM1LjM2NTE0IDguMTk2ODUgNS42NTAwNiA3Ljk5NDY2IDcuMDg0NTMgNi45NzY2NEw3LjEwODQ3IDYuOTU5NjVDOC40NTI5IDYuMDA1NTUgOS4zMTY3NCA2LjAyMjc4IDEwLjg4ODkgNi4wOTE2M1Y3LjQwMTUzWiIgZmlsbD0iIzg2OEE5MSIvPgo8L3N2Zz4K',
};
