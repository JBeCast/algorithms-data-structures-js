describe('SinglyLinkedList', () => {
  const SinglyLinkedList = require('./SinglyLinkedList');

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
    })
  })
});