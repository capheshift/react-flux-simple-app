/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({
  handleClick:function(){
    AppActions.addItem('Detack header!');
  },

  render:function(){
    return (
      <button onClick={this.handleClick}>DETACK</button>
    )
  }
});

module.exports = App;
