# camel-caser
A package to convert Javsacric objects keys into camel case

To install this 

<pre>npm install camel-caser --save</pre>

Example:
<pre>import camelCaser = require('camel-caser')
var jsonData= {"Key":"Value"}
camelCaser.toCamelCase(jsonData)</pre>
Output would be like this:
<pre>{"key":"Value"}</pre>
