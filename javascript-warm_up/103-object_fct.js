#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
      this.value++;
    }
  };
  
  function displayObject(obj) {
    const { type, value, incr } = obj;
    console.log({ type, value, incr });
  }
  
  displayObject(myObject);
  myObject.incr();
  displayObject(myObject);
  myObject.incr();
  displayObject(myObject);
  myObject.incr();
  displayObject(myObject);
  
  