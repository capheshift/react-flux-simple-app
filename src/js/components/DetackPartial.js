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
      <div className="wrapper">
        <button onClick={this.handleClick}>Detack</button>
      </div>
    )
  }
});

module.exports = App;
