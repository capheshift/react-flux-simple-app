/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AttackButton = require('./AttackPartial');
var DetackButton = require('./DetackPartial');

var App = React.createClass({

  getInitialState: function() {
    return {
      eventList: []
    };
  },

  render:function(){
    var eventListRender = '',
      eventList = this.state.eventList;

    if (eventList !== null) {
      eventListRender =  eventList.map(function(item, i) {
        return <p>Attack content: {item.action.item}</p>;
      });
    }

    return (
      <div className="wrapper">
        <h3>Click this Title, then check console</h3>
        {eventListRender}

        <div className="wrapper">
          <AttackButton/>
          <span> </span>
          <DetackButton/>
        </div>
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
    var eventList = this.state.eventList;
    eventList.push(data);
    this.setState({eventList: eventList});
  }
});

module.exports = App;
