import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeData:{},
      dataFetched: false,
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () =>{
    axios
    .get(`https://github.com/bhargavi101/bhargaviwebsite/blob/gh-pages/resume.json`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        resumeData: response.data.main,
        dataFetched: true,
      })
    })
    .catch((error) => {

    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{this.state.resumeData.name}</h1>
      </div>
    );
  }
}



export default App;
