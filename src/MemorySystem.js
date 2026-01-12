class MemorySystem {
  constructor() {
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }

  clear() {
    this.store.clear();
  }
}

module.exports = MemorySystem;