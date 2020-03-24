function sayHelloToPlugin(target) {
    console.log("target.foo =", target.foo);
    console.log("target.bar =", target.bar);
}

export { sayHelloToPlugin };
