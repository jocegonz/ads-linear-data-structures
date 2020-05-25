class DLLNode {
  constructor({ element = undefined, next = this, prev = this, isSentinel = false }) {
    this.element = element;
    this.next = next;
    this.prev = prev;
    this._active = !isSentinel;
  }

  remove() {
    if (this._active) {
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this._active = false;
      return this.element;
    }
  }
}

class DoublyLinkedList {
  constructor(Node = DLLNode) {
    this.Node = Node;
    this._sentinel = new this.Node({ isSentinel: true });
    this._count = 0;
  }

  _head() {
    return this._sentinel.next;
  }

  _tail() {
    return this._sentinel.prev;
  }

  insertHead(element) {
    let newHead  = new this.Node({ element, next: this._head(), prev: this._sentinel});
    this._count += 1;
    this._head().prev = newHead;
    this._sentinel.next = newHead;
    return newHead;
  }

  insertTail(element) {
    let newTail = new this.Node({element, next: this._sentinel, prev: this._tail()})
    this._count += 1;
    this._tail().next = newTail;
    this._sentinel.prev = newTail;
    return newTail;
  }

  removeHead() {
    0 === this._count ? undefined : this._count -=1;
    return this._head().remove();
  }

  removeTail() {
    0 === this._count ? undefined: this._count -= 1;
    return this._tail().remove();
  }

  remove(node) {
    if (node.element) {
      this._count -= 1;
      return node.remove();
    }
    return undefined;
  }

  forEach(callback, queue = this) {
    let index = 0;
    let node = this._head();
    while (node !== this._sentinel) {
      callback(node.element, index, queue)
      index += 1;
      node = node.next;
    }
  }

  count() {
    return this._count;
  }
}

export default DoublyLinkedList;