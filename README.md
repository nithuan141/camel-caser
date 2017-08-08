# camel-caser
A package to convert Javsacric objects keys into camel case

To install this 

<pre>npm install camel-caser --save</pre>

Example:
<pre>import camelCaser = require('camel-caser')</pre>
    var jsonData= {"Key":"Value"}</pre>
<pre>camelCaser.toCamelCase(jsonData)</pre>
Output would be like this:
<pre>{"key":"Value"}</pre>
