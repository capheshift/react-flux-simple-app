var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
	changeData: null,

  emitChange: function(data) {
  	this.changeData = data;
    this.emit(CHANGE_EVENT, data);
  },

  addChangeListener: function(callback) {
  	this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
  	this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload){
  AppStore.emitChange(payload);
  return true;
});

module.exports = AppStore;
