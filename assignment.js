// feetToMile

 function feetToMile(feet) {
    var mile = feet/5280;
    return mile
}

var wantMile = feetToMile(55685)
console.log(wantMile)

// woodCalculator

function woodCalculator(chair,table,bed) {
var chairCount = chair * 1
var tableCount = table * 3
var bedCount = bed * 5
var totalWood = chairCount + tableCount + bedCount
return totalWood
}
var woodNeed = woodCalculator(5,3,2);
console.log(woodNeed);