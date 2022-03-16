// Code your solution here
function findMatching (array, name){
    return array.filter(element => element.toLowerCase() === name.toLowerCase())
    }

function fuzzyMatch (array,name){
    return array.filter(function(element){
        return element.slice(0,name.length).toLowerCase() === name.toLowerCase()
    })
}

function matchName(array,name){
    return array.filter(function(element){
        return element["name"] === name;
    })
}