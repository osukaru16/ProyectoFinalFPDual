suite('NotesFrequencies', function() {


    var testCases = [
        { args: [16], expected: "C0 / C0"},
        { args: [16.4346], expected: "C0 / C0"},
        { args: [51], expected: "G#1/Ab1 / G#1/Ab1"},
        { args: [82], expected: "E2 / E2"},
        { args: [200], expected: "G3 / G#3/Ab3"},
        { args: [740], expected: "F#5/Gb5 / G5"},
        { args: [1760], expected: "A6 / A6"},
        { args: [7902], expected: "B8 / B8"},
        { args: [440], expected: "A4 / A4"},
        { args: [98], expected: "G2 / G2"},
        { args: [97], expected: "G2 / G2"},
        { args: [97.9989], expected: "G2 / G2"},
        { args: [92.4986], expected: "F#2/Gb2 / F#2/Gb2"},
        { args: [92.49], expected: "F#2/Gb2 / F#2/Gb2"},
        { args: [2637.020], expected: "E7 / E7"},
        { args: [2489.016], expected: "D#7/Eb7 / D#7/Eb7"},
        { args: [2489], expected: "D#7/Eb7 / D#7/Eb7"},
        { args: [2490], expected: "D#7/Eb7 / D#7/Eb7"},
        { args: [2488], expected: "D#7/Eb7 / D#7/Eb7"},
        { args: [2349.318], expected: "D7 / D7"},
        { args: [329.628], expected: "E4 / E4"},
        { args: [329], expected: "E4 / E4"},
        { args: [330], expected: "E4 / E4"},
        { args: [328], expected: "E4 / E4"},
    ];

    testCases.forEach(function(testCase) {

        test('findNoteByFrequency when called with frequency ' + testCase.args + ' should return ' + testCase.expected, function() {
            var actual = NotesFrequencies.findNoteByFrequency(testCase.args);

            chai.assert.equal(actual, testCase.expected);
        });

    });

});