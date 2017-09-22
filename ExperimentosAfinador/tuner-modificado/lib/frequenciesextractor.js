function FrequenciesExtractor() {

    this.extractHigherValueFrequency = function(frequencyByteData, fourierFastTransformSize, sampleRate) {
        var higherValue = 0;
        var higherValueFrequency = 0;
        //var length = frequencyByteData.length;
        // Buscar la frecuencia con el valor más alto
        for(var x=0; x<frequencyByteData.length; x++) {

            var frequency = __calculateFrequency(x, sampleRate, fourierFastTransformSize);

            if (frequencyByteData[x] > higherValue) {
                higherValue = frequencyByteData[x];
                higherValueFrequency = frequency;
            }
        }

        return higherValueFrequency;
    };

    function __calculateFrequency(position, sampleRate, fourierFastTransformSize) {
        return position * (sampleRate / (fourierFastTransformSize * 2));
    }

};
