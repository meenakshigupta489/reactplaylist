import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textcolor ='#fff';
let defaultstyle={
color: textcolor
};
class Gate extends Component{
  render() {
    
    return (
      <div style={{ width:"40%" , display: "inline-block"}}>
      <h2 style={{ color:'#fff' }}> Number Text</h2>

      </div>
    );
  }
}
class Filter extends Component {
  render(){
    return(
<div style={{ color: textcolor }}>
<img/> 
<input type="text"/>

</div>

      );
  }
}

class Playlist extends Component{
  render(){
    return(
<div style={{ ...defaultstyle , display: 'inline-block' , width: "25%" }}>
<img/> 
<h3> Playlist Name </h3>
<ul> 
<li>Song 1 </li>
<li>  Song 2</li>
<li> Song 3 </li>
</ul>
</div>



      );
  }
}

class App extends Component {
  render() {
    let name = "meenakshi"
    let green = "white"
    return (
      <div className="App">
      <h1 style={{color:green}}> Title</h1>
        <Gate/> 
        <Gate/> 
<Filter/>
<Playlist/>
<Playlist/>
<Playlist/>
<Playlist/>
      </div>
    );
  }
}

export default App;
