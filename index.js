//defines where the hQ is
const hQ = 42
// distance of a manhattan block in feet
const manhattanBlock = 264

function distanceFromHqInBlocks(blockStart){
    return(Math.abs(blockStart - hQ))
    //return a number of blocks for a given value
}

    //this function is hard coded with the info above
// function distanceFromHqInFeet(blockStart){
//     return(Math.abs(blockStart - hQ)) * manhattanBlock
// }        
   
    // this is the function I want to make work 
    // check out the varibles for parameters in these functions distanceFrom
function distanceFromHqInFeet(f){
    return (distanceFromHqInBlocks(f) * manhattanBlock)
} 

    //This is the function I want to work
function distanceTravelledInFeet(start, destination){
    return(Math.abs(start - destination)) * manhattanBlock
}

    //this function will be if else, same production as function above
// function distanceTravelledInFeet(start, destination){
//         if (start >= destination){
//         return (start - destination) * manhattanBlock
//         } else  {(start < destination)
//         return (destination - start) * manhattanBlock
//         }
// }

        
    // function calculatesFarePrice(start, destination){
function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination) <= 400){
        return 0
    } else if (distanceTravelledInFeet(start,destination) > 400 && (distanceTravelledInFeet(start,destination) <= 2000)){
        return (distanceTravelledInFeet(start,destination) - 400) * .02
    } else if (distanceTravelledInFeet(start,destination) > 2000 && (distanceTravelledInFeet(start,destination) < 2500)){
        return 25
    } else  (distanceTravelledInFeet(start,destination) > 2500 );{
        return "cannot travel that far"
    }
}