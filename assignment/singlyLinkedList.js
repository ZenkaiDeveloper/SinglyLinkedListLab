class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length=0;
    this.head=null;
    this.tail=null;
  }
  push(data){
    // add on to the end of the list
  }
  pop(){
  // Take off the value at the end of the list.
  }
  shift(){
  // delete the current head
  }
  unshift(data){
  //Add on a value to the front/head of the list.
  }
  get(index){
  //Get the value at a specific index
  }
  set(index, value){
  // to set a value to a certain index
  }
  insert(index, value){
    // Insert a value in front of a certain index
  }
  remove(index, value){
    // Remove a certain Index.
  }
}

module.exports = { Node, SinglyLinkedList }
