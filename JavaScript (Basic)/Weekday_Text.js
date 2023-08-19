'use strict'
function weekdatText(weekdays){
    return function(num){
        if(Number(num)>=weekdays.length || Number(num)<0){
            throw new Error ('Invalid weekday number');
        }
        return weekdays[Number(num)];
    };
}