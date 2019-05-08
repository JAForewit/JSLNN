

var MAX_WEIGHT = 1, MIN_WEIGHT = -1;

var net = [
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT),
        axons: [1, 2, 4]
    },
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT),
        axons: [2, 3, 4, 5]
    },
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT),
        axons: [3, 4]
    },
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT),
        axons: [5]
    },
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT)
    },
    {
        output: rand(MAX_WEIGHT, MIN_WEIGHT)
    },
];

function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
    console.log(net);
}