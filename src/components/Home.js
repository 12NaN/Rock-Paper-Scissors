import React, { Component } from 'react';
import './style.css';
export default class Home extends Component {
  render(){

    return(
      <div class="row">
        <div class="column">
          <img src={require("./rock.png")} alt="rock" id="profile-img"/>
        </div>
        <div class="column">
          <img src={require("./paper.png")} alt="paper" id="profile-img"/>
        </div>
        <div class="column">
          <img src={require("./scissors.png")} alt="scissors" id="profile-img"/>
        </div>
      </div>
    );
  }
}
