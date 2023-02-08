let promise = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function(result) {

    console.log(result);
    return result * 2;

}).then(function(result) {

    console.log(result);
    return result * 2;

}).then(function(result) {

    console.log(result);
    return result * 2;

});

let not_chaining = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

not_chaining.then(function(result) {
    console.log(result);
    return result * 2;
});

not_chaining.then(function(result) {
    console.log(result);
    return result * 2;
});

not_chaining.then(function(result) {
    console.log(result);
    return result * 2;
});