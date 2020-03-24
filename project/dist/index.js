"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin = __importStar(require("@merge/plugin"));
Plugin.sayHelloToPlugin({ foo: 'foo', bar: 'bar' });
// This should fail at compile time, but it pass
Merge.sayHelloToCore({ foo: 'foo', bar: 'bar' });
