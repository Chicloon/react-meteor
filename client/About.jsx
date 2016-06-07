import React, {Component} from 'react';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <div>
        <h1> About Us </h1>
        <p> Bla bla bla </p>
        <button onClick={this.setVar}>Sing Up</button>
      </div>
    )
  }
}
