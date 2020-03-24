import * as Plugin from '@merge/plugin';

Plugin.sayHelloToPlugin({foo: 'foo', bar: 'bar'})


// This should fail at compile time, but it pass
Merge.sayHelloToCore({foo: 'foo', bar: 'bar'})