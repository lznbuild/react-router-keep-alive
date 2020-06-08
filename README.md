注释代码中很详细了。

## 总结  
<AliveScope / >  存储所有通过KeepAlive缓存的组件和id的对应关系，保留对应组件的真实dom节点和vdom,这是最核心的部分   


withScope 高阶组件，统一通过React context 的Consumer接受最外层AliveScope传递的keep方法  

AliveScope  首次渲染或者路由切换的时候添加对应的真实dom节点 
