/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AttachButton = require('./AttackPartial');

var App = React.createClass({

  getInitialState: function() {
    return {
      model: null
    };
  },

  render:function(){
    var attachRender = '',
      model = this.state.model;

    if (model !== null) {
      attachRender = (
        <p>Attack content: {model.action.item}</p>
      );
    }

    return (
      <div className="wrapper">
        <h3>Click this Title, then check console</h3>
        {attachRender}
        <AttachButton/>
      </div>
    )
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function(data) {
    console.log('Change', data);
    this.setState({model: data});
  }
});

module.exports = App;
