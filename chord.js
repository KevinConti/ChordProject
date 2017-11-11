let CHORD = {}; //Global object

CHORD.userArgs = function(B,N){
    "use strict";
    let idSpace = B;
    let numberOfNodes = N;

    return{
        getIdSpace: function() {
            return idSpace;
        },
        getNumberOfNodes: function () {
            return numberOfNodes;
        }
    };
};

module.exports = CHORD;