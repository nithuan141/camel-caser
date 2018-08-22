# camel-caser

This package will helps to convert all the keys of a javascript object into camel case.  Mostly usefull to convert the keys of JSON to camel case before parsing it to a type.

# Code Example

<pre>import camelCaser = require('camel-caser')
var jsonData= {"Key":"Value"}
camelCaser.toCamelCase(jsonData)</pre>
Output would be like this:
<pre>{"key":"Value"}</pre>

# Installation.

To install this use the below npm command
<pre>npm install camel-caser --save</pre>

# Tests

<pre>npm test</pre>

# Contributors

https://stackoverflow.com/users/1750719/nithesh


# License

MIT
