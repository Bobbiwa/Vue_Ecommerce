# vue_ecommerce

# Feature:
# 1.路由到注册和登录不展示 Footer
为路由配置元信息：router 里设置 meta 属性，然后用 v-show="$route.meta.show"
# 2.如何指定 params 参数可传与不传
如果路由后面加了占位符，但是你不传参，url 就会有问题(不会出现这层路由)
解决办法是在占位符后面加一个“？”
然后 this.$router.push({ name: 'search', params: { keywords: this.keywords || undefined } }) 加上||undefined
# 3.跨域
在vue.config.js中配置
```javascript
devServer: {
  proxy: {
    api: { target: 'http://gmall-h5-api.atguigu.cn' },
  },
},
```
# 4.vue中使用transition
看<Nav/>组建和官方文档
# 坑

如果 vue-router params 传参，必须给路由加 name 属性起名字，否则跳转失败
this.$router.push({name:'',params:{}}) //push 里面不能用 path

