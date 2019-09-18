import React, { Component } from 'react';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      attr: 123
     }
  }

  componentDidMount() {
    
  }

 //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
 componentWillReceiveProps(nextProps) {
  //  console.log(nextProps.attr, this.props.attr);
  }
  
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
  
  }
  handleclick = () => {
    this.setState({
      attr: 678
    })
  }



  render() { 
    console.log(this.props, 'props');
    // console.log('render');
    // console.log(this.props);
    return ( 
      // <div onCopy={this.handleClick}>{obj.name} ===== {obj.personal.name2}</div>
      <>
        <div>{this.state.attr}</div>
        <button onClick={this.handleclick}>改变123</button>
      </>
     );
  }
}
 
export default Page1;