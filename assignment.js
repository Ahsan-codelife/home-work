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

// brickCalculator






// tinyFriend

function tinyFriend(friend){
    var smallName = Infinity;
    var tinyName;
    for (var i=0; i<friend.length; i++) 
    {
        if (friend[i].length < smallName)
    {
        smallName = friend[i].length;
        tinyFriend = friend[i];
    }
}
 return tinyName;
}
