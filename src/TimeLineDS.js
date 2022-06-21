export default class TimeLineDS {
  constructor() {
    this._values = {};
    this._line = [];
  }
  add(word) { // return true if word already exists, false if new word
    this._line.push(word);
    if (this._values[word]) {
    } else {
      this._values[word] = true;
    }
    return this;
  }
  check(word) {
    if (this._values[word]) {
      return true;
    }
    return false;
  }
  getWords() {
    return this._values;
  }
  getInOrder() {
    return this._line;
  }
}
