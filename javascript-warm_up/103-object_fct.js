#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
      this.value++;
    },
  };
  
  console.log({ type: myObject.type, value: myObject.value });
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });
  