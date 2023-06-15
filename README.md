# giturl

[![CI](https://github.com/repo-utils/giturl/actions/workflows/nodejs.yml/badge.svg)](https://github.com/repo-utils/giturl/actions/workflows/nodejs.yml)

[![NPM](https://nodei.co/npm/giturl.png?downloads=true&stars=true)](https://nodei.co/npm/giturl/)

![logo](https://raw.github.com/repo-utils/giturl/master/logo.png)

Transfer git url to web url.

## Install

```bash
npm install giturl
```

## Usage

```js
var giturl = require('giturl');

giturl.parse('git://gitlab.com/edp/logger.git');
// => http://gitlab.com/edp/logger

giturl.parse('git@gitlab.com:edp/logger.git');
// => http://gitlab.com/edp/logger

giturl.parse('git://github.com/treygriffith/cellar.git');
// => https://github.com/treygriffith/cellar

giturl.parse('https://jpillora@github.com/banchee/tranquil.git');
// => https://github.com/banchee/tranquil

giturl.parse('https://jpillora@github.com/banchee/tranquil.git');
// => https://github.com/banchee/tranquil

giturl.parse('git@github.com:cnpm/cnpm.git');
// => https://github.com/cnpm/cnpm

giturl.parse('git@gitcafe.com:fengmk2/cnpm.git');
// => http://gitcafe.com/fengmk2/cnpm

giturl.parse('http://github.com/component/emitter/archive/1.0.1.tar.gz')
// => https://github.com/component/emitter
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;<fengmk2@gmail.com>&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/360661?v=4" width="100px;"/><br/><sub><b>popomore</b></sub>](https://github.com/popomore)<br/>|[<img src="https://avatars.githubusercontent.com/u/99484857?v=4" width="100px;"/><br/><sub><b>npmmirror</b></sub>](https://github.com/npmmirror)<br/>|
| :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Thu Jun 15 2023 08:58:20 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
