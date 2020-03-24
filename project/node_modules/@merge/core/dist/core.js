var Pluggable = /** @class */ (function () {
    function Pluggable() {
        this.foo = "foo";
    }
    return Pluggable;
}());
function sayHelloToCore(target) {
    console.log(target.foo);
}

export { Pluggable, sayHelloToCore };
