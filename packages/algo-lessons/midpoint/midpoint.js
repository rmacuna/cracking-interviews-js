/**
 * Returns the midpoint of the linked list without using any counter or 
 * getting the size of the list. This approach use a fast pointer (which moves always 2 steps) and
 * a slow pointer (which moves always 1 step). 
 * 
 * If the two nodes in front of the fast pointer doesn't give you another node, then you reach the end of the list
 * and the slowPointer will be always at the midpoint. 
 */
const midpoint = (list = new LinkedList()) => {
  let slowNode = list.getAt(0);
  let fastNode = list.getAt(0);

  // We are using a fast pointer and a slow pointer. 
  while (fastNode && fastNode.next.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  // When the loop completes, the midpoint will be the slowNode.
  return slowNode;
}