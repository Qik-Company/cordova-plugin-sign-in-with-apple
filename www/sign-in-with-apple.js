var exec = require('cordova/exec');

exports.signin = function (options, success, error) {
  options = options || {};
  exec(success, error, 'SignInWithApple', 'signin', [
    {
      requestedScopes: options.requestedScopes || [0, 1],
      state: options.state || '',
    },
  ]);
};
