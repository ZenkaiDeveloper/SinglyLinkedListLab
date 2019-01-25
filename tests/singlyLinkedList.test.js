const { SinglyLinkedList, Node } = require('../assignment/singlyLinkedList');

let list = new SinglyLinkedList();

test('If the list has one value, expect the head to be that value', () => {
  list.push(10);
  expect(list.head.val).toBe(10);
})

test('If the list has one value, expect the tail to be that value', () => {
  expect(list.tail.val).toBe(10);
})

test('Singly linked list can add on by pushing.', () => {
  list.push(32);
  list.push(20);
  expect(list.tail.val).toBe(20);
})

test("The Pop method removes the last element in the old list", () => {
  list.push(20);
  list.push(23);
  list.push(12);
  list.push(14);
  list.push(6);
  list.pop();
  expect(list.length).toBe(4);
})

test("The Pop method changes the tail to the second to the last element in the old list", () => {
  list.push(20);
  list.push(23);
  list.push(12);
  list.push(14);
  list.push(6);
  list.pop();
  expect(list.tail.val).toBe(14);
})

test("The shift method removes the first element in the old list", () => {
  list.push(20);
  list.push(23);
  list.push(12);
  list.push(14);
  list.push(6);
  list.shift();
  expect(list.length).toBe(4);
})

test("The shift method changes the head to the second element on the old list", () => {
  list.push(20);
  list.push(23);
  list.push(12);
  list.push(14);
  list.push(6);
  list.shift();
  expect(list.head.val).toBe(23);
})

test('The unshift method takes in a value, creates a node and then inserts it in the front of the list.', () => {
  list.push(32);
  list.push(34);
  list.push(9);
  list.push(4);
  list.push(6);
  list.unshift(88);
  expect(list.head.val).toBe(88);
})

test("get gets a value at a specific index", () => {
  list.push(32);
  list.push(34);
  list.push(91);
  list.push(42);
  list.push(60);
  expect(list.get(4).val).toBe(42);
})

test('The insert method creates a node and inserts the node after a certain index', () => {
  list.push(32);
  list.push(34);
  list.push(41);
  list.insert(2, 89);
  expect(list.get(2)).toBe(89);
})

test('The remove method removes a node at a certain index', () => {
  list.push(32);
  list.push(34);
  list.push(41);
  list.push(71);
  list.remove(2)
  expect(list.get(2)).toBe(41);
})
