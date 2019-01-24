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
