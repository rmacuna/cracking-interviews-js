
/**
 * @fileoverview
 * Partial implementation of a linked list. 
 */


/**
 * Node of the linked list.
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
/**
 * Collection of nodes
 */
class LinkedList {
  constructor(){
    this.head = null;
  }
  /**
   * Insert a new element at the top of the linked list.
   * @param {*} data Data that you want to add. 
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  /**
   * Retrieve the node in the linked list given the position. 
   * @param {*} pos Position of the linked list where you want to retrive the node
   * @returns The node retrieved at the given position or null if empty
   */
  getAt(pos = 0){
    let node = this.head;
    if (pos === 0) return this.head;
    let counter = 0;
    while (node) {
      if (counter === pos) return node;
      node = node.next;
      counter++;
    }
    return node;
  }
  /**
   * Clear all the elements from the linked list.
   */
  clear() {
    this.head = null;
  }
  /**
   * Returns the first element of the linked list
   */
  getFirst() {
    return this.getAt(0);
  }
  /**
   * Returns the size of the linked list
   * @returns {Number} size of the linked list
   */
  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }
}

const list = new LinkedList();
