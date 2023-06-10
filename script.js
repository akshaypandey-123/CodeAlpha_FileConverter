function convertText() {
    var textFile = document.getElementById('textFileInput').files[0];
    var conversionType = document.getElementById('conversionType').value;
    var reader = new FileReader();

    reader.onload = function(e) {
        var textContent = e.target.result;
        var convertedText = convert(textContent, conversionType);
        document.getElementById('convertedOutput').value = convertedText;
    };

    reader.readAsText(textFile);
}

function convert(textContent, conversionType) {
    if (conversionType === 'uppercase') {
        return textContent.toUpperCase();
    } else if (conversionType === 'lowercase') {
        return textContent.toLowerCase();
    }
}
