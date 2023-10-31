"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 8));
//# sourceMappingURL=03_%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B(Array).js.map