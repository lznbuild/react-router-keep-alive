import React, { Component} from 'react';
import './App.less';
import Page1 from './components/page1/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  num:state.todos.num
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({
      type: 'ADD_TODO',
      payload: 9
    })
  }
})

const { Provider } = React.createContext();
class App extends Component {
  constructor(props) {
    super(props)
    this.refDom = React.createRef()

    this.state = {
      age: 91
    }
  }


  fn = () => {
    setTimeout(() => {
      this.props.onClick()
    }, 3000)
  }


  render() {
    const { age } = this.state;
    const { num } = this.props;
    return (
      <div className="digital-drive-container">
        <div>{num}</div>
        <Page1
          attr={age}
          exa
        /> 
        <button onClick={this.fn}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
