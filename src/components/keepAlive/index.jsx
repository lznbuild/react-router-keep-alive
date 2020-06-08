import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()
const withScope = WrappedComponent => props => (
  <Consumer>{keep => <WrappedComponent {...props} keep={keep} />}</Consumer>
)

export class AliveScope extends Component {
  constructor(props) {
    super(props)
    // 存储vdom和id
    this.state = {}

    // 存储真实dom和id
    this.nodes = {}
  }



  keep = (id, children) =>
    new Promise(resolve =>
      // id和vdom建立映射关系
      this.setState(
        {
          [id]: { id, children }
        },
        // resolve对应的真实dom，必须resolve，否则await后的代码不会执行
        () => resolve(this.nodes[id])
      )
    )

  render() {
    console.log(this.state, 'this.state');
    console.log(this.nodes, 'this.nodes');
    console.log(Object.values(this.state),'jlkj');
    return (
      <Provider value={this.keep}>
        {this.props.children}
        {/* 没错，这里是渲染所有注册过的组件Page1,Page2 ，下面会替换掉*/}
        {Object.values(this.state).map(({ id, children }) => {
          return (
            <div
              id="alive" //标识作用
              key={id}
              ref={node => {
                // 建立this.nodes和真实dom的关系
                this.nodes[id] = node
              }}
            >
              {children}
            </div>
          )
        })}
      </Provider>
    )
  }
}

class KeepAlive extends Component {
  constructor(props) {
    // 每次路由切换到keepalive包裹的组件都会调用constructor，不通过render渲染children,通过init()挂载真实dom
    super(props)
    this.init(props)
  }

  init = async ({ id, children, keep }) => {
    // keep通过高阶组件withScope传递过来的,id,children通过keepAlive包裹组件传递过来的
    const realContent = await keep(id, children)

    console.log(realContent, 'realContent');
    // 只渲染对应的真实dom,替换掉上面渲染的所有组件
    this.placeholder.appendChild(realContent)
  }

  render() {
    return (
      <div
        id="alivekeep" // 标识作用
        ref={node => {
          this.placeholder = node
        }}
      />
    )
  }
}

export default withScope(KeepAlive)
