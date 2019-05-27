var deepCopy = function(obj) {
    var clone = {};
    for (var prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            clone[prop] = deepCopy(obj[prop]);
        } else {
            clone[prop] = obj[prop];
        }
    }
    return clone;
};