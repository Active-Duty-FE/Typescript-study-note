export {} // 确保跟其他实例没有冲突

interface Post {
  title: string
  subTitle?: string  // 可选成员
  readonly summary: string
}
function printPost(post: Post){
  console.log(post.title);
}
printPost({
  title:'abc',
  summary: 'summary'
})


// 动态成员

interface Cache {
  [key: string]: string
}
const cache: Cache = {}
cache.foo = 'name'
cache.bar = 'bar'
// cache.bar = 123 报错