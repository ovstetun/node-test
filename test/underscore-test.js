var buster = require('buster');

var a = [1, 2, 3];

buster.testCase("std lib", {
  'map' : function() {
    var b = a.map(function (i) {return i*2;});
    assert.equals(b, [2, 4, 6]);
  }
});

var _ = require('underscore')

buster.testCase('underscore', {
  'map' : {
    "should work": function() {
      var b = _.map(a, function(i) {return i*2;});

      assert.equals(b, [2, 4, 6]);
    }
  },
  'find' : {
    'should find first element': function() {
      var b = _.find(a, function(i) { return i === 2});
      assert.equals(2, b);
    }
  }
});
