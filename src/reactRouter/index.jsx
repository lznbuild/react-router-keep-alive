import React, { Component } from 'react';
// import { createBrowserHistory } from 'history';// react-router的依赖库


// 创建一个上下文保存history,location,match 等路由信息
const RouterContext = React.createContext()


//router：管理历史记录变更，location变更等，并传递给后代
class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    // 创建浏览器history对象
    this.history = props; // 监控浏览器的Url变化，并做了一些兼容性处理

    // 创建状态管理Location
    this.state = {
      location: this.history.location
    }

    // 开启监听
    this.unlisten = this.history.listen(location => {
      this.setState({location})
    })
  }

  componentWillUnmount() {
    if (this.unlisten) {
      // 解绑监听
      this.unlisten()
    }
  }


  render() { 
    return ( 
      <RouterContext.Provider value={{
        history: this.history,
        location: this.state.location
      }}
      children={this.props.children}
      ></RouterContext.Provider>
     );
  }
}


class Route extends Component{
  render() {
    return (
      <RouterContext.Consumer>

        {/* {
          context => {
            const { location } = context;
            // 根据path
            return (

            )
          }
        } */}
        123
      </RouterContext.Consumer>
    )
  }
}



class RouterText extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
        <Route path="/foo" component={()=> <div>foo</div>}></Route>
        <Route path="/bar" component={()=> <div>bar</div>}></Route>
      </BrowserRouter>
     );
  }
}
 
export default RouterText;
 