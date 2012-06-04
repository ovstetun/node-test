var buster = require('buster');

var index = require('../../lib/routes/index');

buster.testCase('index', {
  'shoud render index' : function() {
    var res = { render: this.stub() };
    var req = this.stub();

    index.index(req, res);

    assert.calledOnceWith(res.render, 'index', {title : 'Express'});
    refute.called(req);
  }
});
