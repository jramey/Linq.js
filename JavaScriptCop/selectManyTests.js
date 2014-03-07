test("Select Many", function () {
    
    var petOwners = [
        {
            name: "John",
            pets: ["Dog", "Cat"]
        },
        {
            name: "John",
            pets: ["Dog", "Fish"]
        }
    ];

    var returned = selectMany(petOwners, function (owner) { return owner.pets; });
    deepEqual(returned, ["Dog", "Cat", "Dog", "Fish"]);
});