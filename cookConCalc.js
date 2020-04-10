$(function() {
    console.log( "ready!" );


let unitList = [
    {unit: "Cups", value: 48},
    {unit: "Fluid Ounces (fl oz)", value: 6},
    {unit: "Gallons (gal)", value: 768},

    {unit: "Liters (L)", value: 202.884},
    {unit: "Milliliters (mL)", value: 0.203},
    {unit: "Pints (pt)", value: 96},

    {unit: "Quarts (qt)", value: 192},
    {unit: "Tablespoons (tbsp)", value: 3},
    {unit: "Teaspoons (tsp)", value: 1},
];

let select = $('<select>').appendTo('#main');
$(unitList).each(function() {
    select.append($("<option>").attr('value',this.value).text(this.unit));
});

});