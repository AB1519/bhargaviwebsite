import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeData:{
        "name":"Bhargavi Angadi",
        "occupation":"Front-end developer, programmer and designer",
        "description1":"An Enthusiastic",
        "description2": "creating awesome and fun websites. Lets ",
        "image":"profilepic.jpg",
        "bio":"I love designing and creating simple, intutive and fun user experiences that keep customers engaged and happy. I am passionate about designing and coding.The balance between the two helps me to understand the feasibility and application of each product. Each design sprint helps me learn something new and evolve as an UI Developer.",
        "email": "bhargavia93@gmail.com",
      },
      dataFetched: false,
    }
  }

  // componentDidMount = () => {
  //   this.getData()
  // }

  // getData = () =>{
  //   axios
  //   .get(`https://github.com/bhargavi101/bhargaviwebsite/blob/gh-pages/resume.json`)
  //   .then((response) => {
  //     console.log(response.data)
  //     this.setState({
  //       resumeData: response.data.main,
  //       dataFetched: true,
  //     })
  //   })
  //   .catch((error) => {
  //   })
  // }
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
