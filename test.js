'use strict';

var expect = require('chai').expect;
var camelCaser = require('./index');

describe('#camelCaser', function() {

    it('should convert the objcet to camel case', function() {
        var result = camelCaser.toCamelCase({"TestKey":"TestValue"});
        expect(result.testKey).to.equal('TestValue');
    });

    it('should convert the objcet to camel case', function() {
	var jsonData = {"TestKey":[{"Key":"Value1", "KeyKey": "Value 2"},{"Key":"Value1", "KeyKey": "Value 2"}]};
        var result = camelCaser.toCamelCase(jsonData);
        expect(result.testKey[0].key).to.equal('Value1');
    });
});
