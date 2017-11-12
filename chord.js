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

var userInput = function getUserInput() {
    let prompt = require('prompt');
    prompt.start();

    //
    // Get two properties from the user: username and email
    //
    prompt.get([{
        name: 'B',
        description: 'Welcome to chord! Please enter your ID-Space (B) value as a single-digit integer',
        type: 'integer',
        message: 'Must be a single-digit integer. Try again.'
    }, {
        name: 'N',
        description: 'Thank you! Next, enter in the number of nodes you wish to display',
        type: 'integer',
        message: 'Must be an integer. Try again.'}], function (err, result) {
        //
        // Log the results.
        //
        console.log('Command-line input received:');
        console.log('  B: ' + result.B);
        console.log('  N: ' + result.N);
        prompt.stop();
        return result;
    });
}();

module.exports = CHORD;