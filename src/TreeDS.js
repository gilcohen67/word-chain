export default class TreeDS {
  constructor(val, root) {
    this.value = val;
    this.children = [];
    if (root) {
      this.allNodes = {[val]: this};
    }
  }
  addChild(node) {
    this.children.push(node);
  }
}