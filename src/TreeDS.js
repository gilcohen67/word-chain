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
const applications = new TreeDS('applications');
const calendar = new TreeDS('calendar');
const documents = new TreeDS('documents');
const oss = new TreeDS('oss');
const mui = new TreeDS('mui');
const index = new TreeDS('index');
applications.addChild(calendar)
applications.addChild(documents)
documents.addChild(oss)
documents.addChild(mui)
mui.addChild(index)
export { applications };