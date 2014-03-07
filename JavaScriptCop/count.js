function count(object, predicate) {
    var itemCount = 0; 

    for (var i = 0; i < object.length; i++) 
        if (predicate(object[i])) 
            itemCount++;

    return itemCount;
};