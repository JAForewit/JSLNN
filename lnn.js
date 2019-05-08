

var MAX_WEIGHT = 1;
var MIN_WEIGHT = -1;
var MAX_BIAS = 0.7;
var MIN_BIAS = -0.7;

//*************** NET SETUP **********/
var netSize = [1, 2, 6]; //[inputs, outputs, total]
var net = [];
for (var i = 0; i < netSize[2]; i++) {
    var n = {
        id: i,
        output: rand(MAX_BIAS, MIN_BIAS),
        inCount: 0,
        inputs: [],
        axons: []
    };
    net.push(n);
}

net[0].axons = [
    { n: net[1], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[2], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[4], w: rand(MAX_WEIGHT, MIN_WEIGHT) }];
net[0].inCount = 1; //input neuron

net[1].axons = [
    { n: net[2], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[3], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[4], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[5], w: rand(MAX_WEIGHT, MIN_WEIGHT) }];
net[1].inCount = 1;

net[2].axons = [
    { n: net[3], w: rand(MAX_WEIGHT, MIN_WEIGHT) },
    { n: net[4], w: rand(MAX_WEIGHT, MIN_WEIGHT) }];
net[2].inCount = 2;

net[3].axons = [
    { n: net[5], w: rand(MAX_WEIGHT, MIN_WEIGHT) }];
net[3].inCount = 2;

net[4].axons = [];
net[4].inCount = 3;

net[5].axons = [];
net[5].inCount = 2;
//************* END NET SETUP ********/

function feedforward(inputs) {
    var queue = []; //queue of qualified neurons

    //set inputs
    for (var i = 0; i < inputs.length; i++) {
        net[i].inputs.push(inputs[i]);
        queue.push(net[i]);
    }

    while (queue.length > 0) {
        //iterate through the queue
        var q = queue.length;
        for (var i = 0; i < q; i++) {
            //caluate neuron output
            var n = queue[i];
            var sum = 0;
            for (var j = 0; j < n.inputs.length; j++) {
                sum += n.inputs[j];
            }
            n.output = sigmoid(sum);

            //calcualte axon output
            for (var j = 0; j < n.axons.length; j++) {
                var axon = n.axons[j];
                axon.n.inputs.push(n.output * axon.w);

                //add aneuron to queue if qualified
                if (axon.n.inCount == axon.n.inputs.length) {
                    queue.push(axon.n);
                    console.log("added " + axon.n.id + " to queue");
                }
            }

            //remove neuron from queue
            queue.splice(i, 1);
            console.log("removed " + n.id + " from queue");
        }
    }
}


function init() {
    feedforward([2]); //arbitrary inputs
    console.log(net);
}

function sigmoid(x) { return 1 / (1 + Math.exp(-x)); }
function logit(x) { return Math.log(x / (1 - x)); }
function rand(max, min) { return Math.random() * (max - min) + min; }