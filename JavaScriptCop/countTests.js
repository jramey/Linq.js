test("Count Returns 1", function () {
    var array = [1, 2, 3, 4, 5];
    var numberOfitems = count(array, function (item) { return item == 2; });
    equal(numberOfitems, 1);
});

test("Count Returns Multiple Items", function () {
    var array = [1, 2, 2, 4, 5];
    var numberOfitems = count(array, function(item) { return item == 2; });
    equal(numberOfitems, 2);
});