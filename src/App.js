import './App.css';
import {Component} from 'react';
import Todo from './Todo';

class App extends Component() {
  constructor(){
    super()

    this.state={
      list: []
    }

  }

  render(){
    return (
      <div className="App">
        <h1>This is App js</h1>
        <Todo/>
      </div>
    );
    
    }

}

export default App;
