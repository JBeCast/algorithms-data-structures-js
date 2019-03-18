describe('DoublyLinkedList', () => {
  const DoublyLinkedList = require('./DoublyLinkedList');

  describe('Class interface', () => {

    it('should expose the expected methods and props with their initial values', () => {
      const dll = new DoublyLinkedList();

      expect(typeof DoublyLinkedList).toBe('function'); // Constructor function
      expect(typeof dll).toBe('object');

      // Initial values for list properties
      expect(dll.length).toBe(0);
      expect(dll.head).toBe(null);
      expect(dll.tail).toBe(null);

      // List methods
      expect(typeof dll.push).toBe('function');
      expect(typeof dll.pop).toBe('function');
      expect(typeof dll.shift).toBe('function');
      expect(typeof dll.unshift).toBe('function');
      expect(typeof dll.get).toBe('function');
      expect(typeof dll.set).toBe('function');
      expect(typeof dll.insert).toBe('function');
      expect(typeof dll.remove).toBe('function');
      expect(typeof dll.reverse).toBe('function');
    });
  });

  describe('Push method', () => {
    it('should behave as expected', () => {
      const dll = new DoublyLinkedList();

      expect(dll.length).toBe(0); // Initial length
      dll.push(1);
      expect(dll.length).toBe(1); // Length should be increased after pushing
      expect(dll.head).toBe(dll.tail); // Head and tail are the same object when only one node in the list
      expect(typeof dll.head).toBe('object');
      expect(dll.head.val).toBe(1);
      expect(dll.head.next).toBe(null);
      expect(dll.head.prev).toBe(null);
      
      // Push method returns a reference to the list object, so pushes can be chained
      dll.push(2).push(3).push(4).push(5);
      expect(dll.length).toBe(5); // Length should be increased after pushing
      expect(dll.head.next.val).toBe(2);
      expect(dll.tail.prev.val).toBe(4);
    });
  });
  
  describe('Reverse method', () => {
    it('should reverse the list', () => {
      const dll = new DoublyLinkedList();

      for (let i=1; i<6; i++) dll.push(i);
      expect(dll.length).toBe(5);
      expect(dll.head.val).toBe(1);
      expect(dll.tail.val).toBe(5);
      
      dll.reverse();
      
      expect(dll.length).toBe(5);
      expect(dll.head.val).toBe(5);
      expect(dll.tail.val).toBe(1);
      expect(dll.head.prev).toBe(null);
      expect(dll.tail.next).toBe(null);
      expect(dll.head.next.val).toBe(4);
      expect(dll.tail.prev.val).toBe(2);
      expect(dll.head.next.next.val).toBe(3);
      expect(dll.tail.prev.prev.val).toBe(3);
    });
  });
});
