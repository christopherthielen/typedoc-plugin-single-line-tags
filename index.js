var plugin = require('./plugin');
module.exports = function(PluginHost) {
  var app = PluginHost.owner;
  /**
   * used like so:
   * --single-line-tags internal,external,preferred,module
   * or
   * -slt internal,external,preferred,module
   */
  app.options.addDeclaration({ name: 'single-line-tags', short: 'slt' });

  app.converter.addComponent('single-line-tags', plugin.SingleLineTagsPlugin);
};
