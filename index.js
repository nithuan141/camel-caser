
module.exports  = function (o) {
        var newO, origKey, newKey, value
        if (o instanceof Array) {
            newO = []
            for (origKey in o) {
                value = o[origKey]
                if (typeof value === "object") {
                    value = this.toCamel(value)
                }
                newO.push(value)
            }
        } else {
            newO = {}
            for (origKey in o) {
                if (o.hasOwnProperty(origKey)) {
                    newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
                    value = o[origKey]
                    if (value !== null && (value.constructor === Object || value.constructor === Array)) {
                        value = this.toCamel(value)
                    }
                    newO[newKey] = value
                }
            }
        }
        return newO;
    }
