function selectMany(source, selector) {
    var results = [];

    for (var i = 0; i < source.length; i++) {
        var object = selector(source[i]);
        for (var j = 0; j < object.length; j++) {
            results.push(object[j]);
        }
    }
    
    return results;
}