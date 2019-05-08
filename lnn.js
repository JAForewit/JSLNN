

var MAX_WEIGHT = 1, MIN_WEIGHT = -1;

var inSize = 1;
var outSize = 2;

var net = [
    0, [1, rand(MAX_WEIGHT, MIN_WEIGHT),
        2, rand(MAX_WEIGHT, MIN_WEIGHT),
        4, rand(MAX_WEIGHT, MIN_WEIGHT)],
    0, [2, rand(MAX_WEIGHT, MIN_WEIGHT),
        3, rand(MAX_WEIGHT, MIN_WEIGHT),
        4, rand(MAX_WEIGHT, MIN_WEIGHT),
        5, rand(MAX_WEIGHT, MIN_WEIGHT)],
    0, [3, rand(MAX_WEIGHT, MIN_WEIGHT),
        4, rand(MAX_WEIGHT, MIN_WEIGHT)],
    0, [5, rand(MAX_WEIGHT, MIN_WEIGHT),],
    0, [],
    0, []
];

function rand(max, min) {
    return Math.random() * (max - min) + min;
}

function init() {
    console.log(net);
}