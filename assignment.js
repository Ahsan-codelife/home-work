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

function brickCalculator(building) {
    var feetBricks = 1000;
    if (building < 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet + feetBricks);
        return totalBricks;
    }
    else if (building <= 20) {
        var firstTenFloorBricks = 30000;
        var totalFeet = (building * 12);
        var totalBricks = (totalFeet * feetBricks) + firstTenFloorBricks;
        return totalBricks;
    }
    else if (building >= 21) {
        var firstTenFloorBricks = 50000;
        var secondFloorBricks = 20000;
        var extraTotalBricks = (firstTenFloorBricks + secondFloorBricks);
        totalFeet = (building * 10);
        var totalBricks = (totalFeet * feetBricks) + extraTotalBricks;
        return totalBricks;
    }
}





// tinyFriend

function tinyFriend(friend) {
    var smallName = Infinity;
    var tinyName;
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length < smallName) {
            smallName = friend[i].length;
            tinyName = friend[i];
        }
    }
    return tinyName;
 }
 var smallestName = tinyFriend(['alu', 'piyag','potol', 'jinga','s', 'ba']);
 console.log(smallestName);
