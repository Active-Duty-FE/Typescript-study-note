"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 'foobar';
const b = 100; // 包括 NAN Infinity
const c = true; // false
// 以上三种类型可以定义为 空, null, undefined  === 关闭严格模式（非严格模式） strictNullChecks:true ==> 单独检查 `null` 和 `undefined`
const d = null;
const e = undefined; // null 严格模式下，只能是 undefined
const f = null;
const g = undefined;
const h = Symbol();
let i;
i = {
    name: 'xixi',
    torf: true
};
let j;
j = {
    name: 'xixi',
    car: 11
};
let k;
k = function (a, b, c) {
    return a + b + c;
};
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
let l;
l = {
    name: 'xixi',
    gender: Gender.female
};
//# sourceMappingURL=02_%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B(primitive-types).js.map