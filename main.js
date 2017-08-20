/**
 * Created by cyz on 2017/8/20.
 */
'use strict';
function find(collection,element){
    for(let item of collection){
        if(item['key']== element){
            return item
        }
    }
    return false
}

function countLetters(str){
    let result =[];
    for(let i=0;i<str.length;i++){
        let finded = find(result,str.charAt(i))
        if(finded){
            finded.count+=1;
        }else{
            result.push({key:str.charAt(i),count:1})
        }
    }
    return result;
}

function getMaxCount(collection){
    let result =[];
    collection.forEach((item)=>{
        result.push(item['count'])
    })
    let max = result.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max
}

function getMaxResult(collection,max){
    let result=[];
    collection.forEach((item)=>{
        if(item['count']==max){
            result.push(item)
        }
    })
    return result
}

function main(str){
    let numberOfTimes = countLetters(str)
    let maxCount = getMaxCount(numberOfTimes)
    let result = getMaxResult(numberOfTimes,maxCount)
    console.log(result)
}

let str='abcsbaddbizdbas'
console.log(str)
main(str)

let str2='aaaaabbdbdbb'
console.log(str2)
main(str2)