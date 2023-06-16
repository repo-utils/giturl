"use strict";

// host[:/]n1/n2
var RE = /^([^:\/]+)[:\/](.+)$/i;

var HTTPS_HOSTS = {
  'github.com': 1,
  'gitcafe.com': 1,
  'gist.github.com': 1,
};

exports.parse = function parse(sourceURL) {
  if (!sourceURL || typeof sourceURL !== 'string') {
    return '';
  }

  var url = sourceURL;

  var originProtocol;
  try {
    var uo = new URL(url);
    originProtocol = uo.protocol;
  } catch (_) {}

  if (url.indexOf('@') >= 0) {
    url = url.replace(/^[^@]+@/, '');    // `git@`` || `https://jpillora@` => ""
  }
  url = url.replace(/^[\w+]+:\/\//, '')    // `git://` || `git+https://` => ""
    .replace(/\.git$/, '');             // .git => ""
  var item = RE.exec(url);
  if (!item) {
    return sourceURL;
  }

  var host = item[1];

  var protocol;
  if (HTTPS_HOSTS[host]) {
    protocol = 'https:';
  } else if ([ 'https:', 'http:' ].includes(originProtocol)) {
    protocol = originProtocol;
  } else {
    protocol = 'http:';
  }

  // p1/p2/.../pn[.xxx]
  var isContainGit = /\.git$/.test(sourceURL);
  var url = isContainGit ? item[2] : item[2].split('/', 2).join('/');
  return protocol + '//' + host + '/' + url;
};
