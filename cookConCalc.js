$(function() {

    let unitList = [
        {unit: "Cups", number: 48},
        {unit: "Fluid Ounces (fl oz)", number: 6},
        {unit: "Gallons (gal)", number: 768},

        {unit: "Liters (L)", number: 202.884},
        {unit: "Milliliters (mL)", number: 0.203},
        {unit: "Pints (pt)", number: 96},

        {unit: "Quarts (qt)", number: 192},
        {unit: "Tablespoons (tbsp)", number: 3},
        {unit: "Teaspoons (tsp)", number: 1},
    ];

    $('<label>Convert</label>').appendTo('#convertFrom');
    $('<label>To</label>').appendTo('#convertTo');

    let convertFrom = $('<select>').attr('id', 'convertFromSelect').appendTo('#convertFrom');
    let convertTo = $('<select>').attr('id', 'convertToSelect').appendTo('#convertTo');
    $(unitList).each(function() {
        convertFrom.append($("<option>").attr('value', this.number).text(this.unit));
        convertTo.append($("<option>").attr('value', this.number).text(this.unit));
    });


    $('<input>').attr('type', 'text').attr('id', 'userInput').appendTo('#input');
    $('<button>').attr('id', 'convert').text('Convert').appendTo('#input');

    let convertFromValue = $('#convertFromSelect option').filter(':selected').val();
    let convertToValue = $('#convertToSelect option').filter(':selected').val();


    $('#convert').click(function(){
        console.log(convertFromValue);
        console.log(convertToValue);
        let ratio = convertFromValue/convertToValue;
        let input = $('#userInput').val();
        let result = ratio * input;
        $('<p>').text(result).appendTo('#result');
    });

});

