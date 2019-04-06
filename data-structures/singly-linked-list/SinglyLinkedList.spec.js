describe('SinglyLinkedList', () => {
  const SinglyLinkedList = require('./SinglyLinkedList');
  const _clone = require('lodash/cloneDeep');

  const sampleList = new SinglyLinkedList();
  sampleList.push(1).push(2).push(3);

  describe('Class interface', () => {

    it('should expose the expected methods and props with their initial values', () => {
      const sll = new SinglyLinkedList();

      expect(typeof SinglyLinkedList).toBe('function'); // Constructor function
      expect(typeof sll).toBe('object');

      // Initial values for list properties
      expect(sll.length).toBe(0);
      expect(sll.head).toBe(null);
      expect(sll.tail).toBe(null);

      // List methods
      expect(typeof sll.push).toBe('function');
      expect(typeof sll.pop).toBe('function');
      expect(typeof sll.shift).toBe('function');
      expect(typeof sll.unshift).toBe('function');
      expect(typeof sll.get).toBe('function');
      expect(typeof sll.set).toBe('function');
      expect(typeof sll.insert).toBe('function');
      expect(typeof sll.remove).toBe('function');
      expect(typeof sll.reverse).toBe('function');
    });
  });

  describe('Push method', () => {
    it('should behave as expected', () => {
      const sll = new SinglyLinkedList();

      expect(sll.length).toBe(0); // Initial length
      sll.push(1);
      expect(sll.length).toBe(1); // Length should be increased after pushing
      expect(sll.head).toBe(sll.tail); // Head and tail are the same object when only one node in the list
      expect(typeof sll.head).toBe('object');
      expect(sll.head.val).toBe(1);
      expect(sll.head.next).toBe(null);

      // Push method returns a reference to the list object, so pushes can be chained
      sll.push(2).push(3).push(4).push(5);
      expect(sll.length).toBe(5); // Length should be increased after pushing
      expect(sll.head.val).toBe(1); // Head value remains the same
      expect(sll.tail.val).toBe(5);
      expect(sll.tail.next).toBe(null);
    });
  });
  
  describe('Pop method', () => {
    it('should behave as expected', () => {
      const sll = _clone(sampleList);
      
      expect(sll.length).toBe(3); // Initial length
      expect(sll.tail.val).toBe(3);
      let poppedNode = sll.pop();
      expect(sll.length).toBe(2);
      expect(sll.tail).not.toBe(poppedNode);
      expect(poppedNode.val).toBe(3);
      expect(poppedNode.next).toBe(null);
      expect(sll.tail.val).toBe(2);
      expect(sll.tail.next).toBe(null);
      poppedNode = sll.pop();
      expect(sll.length).toBe(1);
      expect(poppedNode.val).toBe(2);
      expect(sll.head).toBe(sll.tail); // Only one element remaining
      expect(sll.tail.val).toBe(1);
      poppedNode = sll.pop();
      expect(poppedNode.val).toBe(1);
      expect(sll.length).toBe(0);
      expect(sll.head).toBe(null); // No elements remaining
      expect(sll.tail).toBe(null);
      poppedNode = sll.pop(); // Pop on an empty list
      expect(poppedNode).toBe(null);
      poppedNode = sll.pop(); // Once again
      expect(poppedNode).toBe(null);
    });
  });
  
  describe('Shift method', () => {
    it('should behave as expected', () => {
      const sll = _clone(sampleList);

      expect(sll.length).toBe(3); // Initial length
      expect(sll.tail.val).toBe(3);
      let poppedNode = sll.shift();
      expect(sll.length).toBe(2);
      expect(sll.tail).not.toBe(poppedNode);
      expect(poppedNode.val).toBe(1);
      expect(poppedNode.next).toBe(null);
      expect(sll.tail.val).toBe(3);
      expect(sll.tail.next).toBe(null);
      poppedNode = sll.shift();
      expect(sll.length).toBe(1);
      expect(poppedNode.val).toBe(2);
      expect(sll.head).toBe(sll.tail); // Only one element remaining
      expect(sll.tail.val).toBe(3);
      poppedNode = sll.shift();
      expect(poppedNode.val).toBe(3);
      expect(sll.length).toBe(0);
      expect(sll.head).toBe(null); // No elements remaining
      expect(sll.tail).toBe(null);
      poppedNode = sll.shift(); // Pop on an empty list
      expect(poppedNode).toBe(null);
      poppedNode = sll.shift(); // Once again
      expect(poppedNode).toBe(null);
    });
  });

  describe('Unshift method', () => {
    it('should behave as expected', () => {
      const sll = new SinglyLinkedList();

      expect(sll.length).toBe(0); // Initial length
      sll.unshift(1);
      expect(sll.length).toBe(1); // Length should be increased after pushing
      expect(sll.head).toBe(sll.tail); // Head and tail are the same object when only one node in the list
      expect(typeof sll.head).toBe('object');
      expect(sll.head.val).toBe(1);
      expect(sll.head.next).toBe(null);

      // Unshift method returns a reference to the list object, so unshift ops can be chained
      sll.unshift(2).unshift(3).unshift(4).unshift(5);
      expect(sll.length).toBe(5); // Length should be increased after unshifting
      expect(sll.head.val).toBe(5); // Head value has been shifted every time
      expect(sll.head.next.val).toBe(4);
      expect(sll.head.next.next.val).toBe(3);
      expect(sll.tail.val).toBe(1); // First head is now the tail
      expect(sll.tail.next).toBe(null);
    });
  });  
});
