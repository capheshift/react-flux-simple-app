/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({
  handleClick:function(){
    AppActions.addItem('Attacking header!');
  },

  render:function(){
    return (
      <button onClick={this.handleClick}>ATTACH</button>
    )
  }
});

module.exports = App;
