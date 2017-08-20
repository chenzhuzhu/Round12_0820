/**
 * Created by cyz on 2017/8/20.
 */
'use strict';

function countLetters(str){
    let result ={};
    for(let item of str){

        if(result[item]){
            result[item]++;
        }else{
            result[item]=1;
        }
    }
    return result;

}

function getMaxCount(obj){
    let result=[]
    for(let item in obj){
        result.push(obj[item])
    }
    let max = result.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max

}

function getMaxResult(obj,max){
    let result={};
    for(let item in obj){
        if(obj[item]==max){
            result[item]=max
        }
    }
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