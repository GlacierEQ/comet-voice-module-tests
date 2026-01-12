class CometAgent {
  constructor(config = {}) {
    this.config = config;
    this.context = {};
  }

  initialize(config) {
    this.config = { ...this.config, ...config };
    return this;
  }

  processVoiceInput(input) {
    this.lastInput = input;
    return this;
  }

  generateResponse(context) {
    this.lastContext = context;
    return 'Response generated';
  }

  speakResponse(text) {
    this.lastSpoken = text;
    return this;
  }
}

module.exports = CometAgent;