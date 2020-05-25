import DoublyLinkedList from './doubly_linked_list';

/**
 * Implementation of the Queue interface using a doubly-linked list
 */
class DLLQueue {
  /**
   * Create an empty queue
   */
  constructor() {
    this.storage = new DoublyLinkedList();
    this._count = 0;
  }

  /**
   * Add an element to the back of the queue
   * 
   * @param {any} element Data to track
   * @returns {ticket} Cancellation ticket
   */
  enqueue(element) {
    this._count += 1;
    return this.storage.insertTail(element);
  }

  /**
   * Remove an element from the queue
   * 
   * @param {ticket} ticket Cancellation ticket, as returned by `enqueue`
   * @returns Stored element
   */
  cancel(ticket) {
    if (ticket._active) {
      this._count -= 1;
      return this.storage.remove(ticket);
    }
  }

  /**
   * Remove the element at the front of the queue
   * 
   * @returns Stored element
   */
  dequeue() {
    0 === this._count ? undefined : this._count -= 1;
    return this.storage.removeHead();
  }

  /**
   * How many elements are currently in the queue?
   * 
   * @returns {number} Current count
   */
  count() {
    return this._count;
  }

  /**
   * @callback forEachCallback
   * @param element The element stored at this position
   * @param {number} index The index of this element
   * @param {DLLQueue} queue This queue
   */

  /**
   * Invoke a callback on each element in the queue, in insertion order
   * 
   * @param {forEachCallback} callback Function to invoke
   */
  forEach(callback) {
    return this.storage.forEach(callback, this);
  }
}

export default DLLQueue;