var assert = require('assert');
var jade = require('jade');

// Compile a function
var html = jade.renderFile(__dirname + '/alert.jade');

console.log("HTML render:");
console.log(html);

describe('attribute:',function(){

  // Alerts
  it('Adding attribute: alert-info' ,function() {
    assert.contains('alert-info" data-attribute="test">test single');
  });

  it('Adding attribute: alert-success' ,function() {
    assert.contains('alert-success" data-attribute="test">test single');
  });

  it('Adding attribute: alert-danger' ,function() {
    assert.context('alert-danger" data-attribute="test">test single');
  });

  it('Adding attribute: alert-warning' ,function() {
    assert.contains('alert-warning" data-attribute="test">test single');
  });

});