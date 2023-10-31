* 安装  
`npm init`  
`npm i typescript --dev`
* 启动  
`yarn tsc 项目名` 或者 `yarn tsc` tsc = typescript compile
#### typescript 配置
`yarn tsc --init` 多出 tsconfig.json

#### symbol promise 等 es2015的标准，在 target:es5 会报错
##### 解决方法
1. target 改成 ES2015 或 later 版本
2. "lib": ["ES2015","DOM"] // 设置这个会覆盖所有的默认的标准库，因此为了支持 console.log 等 dom 函数添加 DOM 默认标准库
### 标注库 === 内置对象所对应的声明文件
因此在代码当中想要使用内置对象，必须引用对应的标准库，否则 typescript 找不到所对应的类型，报错