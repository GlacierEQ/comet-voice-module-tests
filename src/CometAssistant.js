class CometAssistant {
  constructor() {
    this.voiceModule = null;
    this.agent = null;
  }

  initialize(voiceModule, agent) {
    this.voiceModule = voiceModule;
    this.agent = agent;
  }
}

module.exports = CometAssistant;