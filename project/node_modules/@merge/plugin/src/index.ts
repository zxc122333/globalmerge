import { Pluggable } from '@merge/core';

export function sayHelloToPlugin(target: Pluggable){
  console.log("target.foo =", target.foo);
  console.log("target.bar =", target.bar);
}