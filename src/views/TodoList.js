import React, { Component } from 'react';
import { PostForm, AllPost } from './../components';
class TodoList extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                <PostForm />
                <AllPost />
                <ProductDetails />
                <Product name="Bùi hoàng hồng linh" />
                <Counter counter="10" animals={[{ name: 'Thanh' }, { name: 'HIhi' }]} messager={['Thanh', 'Ahihi']} >
                    <h1>I love u </h1>
                </Counter>
            </div>
        );
    }
}

function ViewChildItem(props) {
    return (<li>{props.name}</li>);
  }
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: 0,
        isOn: false
      };
      this.state.abc = 12;
      this.buttonClick = this.buttonClick.bind(this);
      this.listItem = props.animals.map((animal, index) =>
        <ViewChildItem name={animal.name} key={animal.name} />
      );
    }
    buttonClick() {
      this.setState((prevState, props) => ({
        isOn: !prevState.isOn
      }));
    }
    // function component  Viết hoa tiên hàm 
    render() {
      let showLogin = null;
      if (this.state.isOn) {
        showLogin = <button>Login</button>
      } else {
        showLogin = <button> Logout</button>
      }
      return (
        <div>
          <button onClick={this.buttonClick} > {this.state.isOn ? 'on' : 'off'} </button>
          {this.state.seconds}
          <br />
          {this.state.abc}
          <br />
          {this.props.counter}
          <br />
          {showLogin}
          <br />
          {this.props.messager.length > 0 ? this.props.messager.length : 'No messager'}
          <br />
          {this.listItem}
          <br/>
          {this.props.children}
        </div>
  
      )
    }
    // arrow function 
    changelights = () => {
      this.setState((prevState, props) => ({
        isOn: !prevState.isOn
      }));
    }
    incrementCouter() {
            this.setState((prevState, props) =>
            ({
              seconds: prevState.seconds + 1
           }));
           this.setState((prevState, props) => ({
             abc: prevState.abc + 1
           }));
    }
    componentDidMount() {
      this.timerID = setInterval(() => this.incrementCouter(), 1000);
    }
    componentWillMount() {
      clearInterval(this.timerID);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
  }
  function ProductDetails(props) {
    return (
      <div> Huỳnh tình thành </div>
    )
  }
  class Product extends React.Component {
    constructor(props) {
      super(props);
      this.user = { name: 'Huỳnh tính thành', birthday: '03/04' };
    }
    render() {
      return (<div>
        Name : {this.props.name}
        <br />
        UserName: {this.user.name}
        <br />
        Birthday : {this.user.birthday}
  
      </div>);
    }
  }

export default TodoList;