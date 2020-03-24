
export interface Pluggable extends GlobalMerge.IPluggable{}

export class Pluggable{
  foo: string = "foo";
}

export function sayHelloToCore(target: Pluggable){
  console.log(target.foo);
}