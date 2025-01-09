export const config = {
  connectorName: 'OpenRouter',
  connectorVersion: '1.0.0',
  models: [
    'openrouter/auto',
    'deepseek/deepseek-chat',
    'sao10k/l3.1-70b-hanami-x1',
    'qwen/qvq-72b-preview',
    'meta-llama/llama-3.3-70b-instruct'
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
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMjBUMTY6NDc6NDctMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMjBUMTY6NDc6NDctMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTIwVDE2OjQ3OjQ3LTA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDY4ZjE5LTJlZDAtNDI4ZC1hMjI5LTNlMjVjOWZkYmFiZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDY4ZjE5LTJlZDAtNDI4ZC1hMjI5LTNlMjVjOWZkYmFiZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDY4ZjE5LTJlZDAtNDI4ZC1hMjI5LTNlMjVjOWZkYmFiZiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDY4ZjE5LTJlZDAtNDI4ZC1hMjI5LTNlMjVjOWZkYmFiZiIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0yMFQxNjo0Nzo0Ny0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YcP6RAAAAZtJREFUOI210j9IVWEYx/HPuYp6L4hdCCKIoH9QENQUNERj0BA0NUWLSwQtgYvg0tQUDUVENDgJQdDQFg0NDQ0RQUNDQzREgxQ0RBd6G855j+fcs3C88MDL+z7P7/t9n/d5n5TneZqJlNIQZnEfPdjHJt7gQ57nP5oSQwixB6/wEDdxFT24jXF8xEwI4VLDhBDiKN5jBBcqXH7iGaZDCMdVhPcwj0s1yQp0YwKLIYTOEuEIXqKjQfI/9GMphHC+IGzDHK43SZZwC29DCG2FcBo3zkCW0Iu5ojKPWpQl9OBTqXIXL85IlnARkyGEVMg+4EqLZAnXsF0WfsalFskSurBXFr7H5XMgS7iC92VhB17/B1nCIFbLwm48wdEZyYRxrFXsw1m0t0iWsIOhEMJJpTDP8z28aYEsYQvD1bfFNKawc0ayhG8YCSEcVE56CCHhEb6ekSxhHWMhhJPaJ+p3q9qxgIEWyBLWMFwrg4YXJaXUiaeYwIUmyRI+Yz6EsNvwbTdDlFLqwz3cQRf+YA+f8A4rjSr6F/5J06pykU6HAAAAAElFTkSuQmCC'
};
