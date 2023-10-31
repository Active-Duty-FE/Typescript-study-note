"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
stringify(100);
stringify(true);
let foo = 'st';
foo = 100;
foo = false;
foo.bar(); // 语法上不会报错
// 类型不安全，不能轻易使用，可是兼容之前版本的代码时可能用到
//# sourceMappingURL=07_%E4%BB%BB%E6%84%8F%E7%B1%BB%E5%9E%8B(Any).js.map