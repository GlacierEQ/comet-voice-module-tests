class VoiceModule {
  constructor(config = {}) {
    this.isListening = false;
    this.audioBuffer = [];
    this.config = config;
  }

  startListening() {
    this.isListening = true;
    return this;
  }

  stopListening() {
    this.isListening = false;
    return this;
  }

  onAudioData(data) {
    this.audioBuffer.push(data);
  }
}

module.exports = VoiceModule;