'use strict'

function dataFinder(data){

    return function find(minRange,maxRange,value){
        console.log(data,minRange,maxRange,value)
        if(maxRange>data.length-1){
            throw new Error('Invalid Range')
        }
        if(data.length==0){
            throw new Error('Invalid Range')
        }
        if(maxRange<minRange){
            throw new Error('Invalid Range')
        }
        for(let i=minRange;i<=maxRange;i++){
            if(data[i===value]){
                return true;
            }
        }
        return false;
    }
}