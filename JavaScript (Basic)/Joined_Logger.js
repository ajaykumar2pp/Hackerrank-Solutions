'use strict'

function joinedLogger(level,sep){

    const result =[];
    const fn = function(...messages){
        for( const message of messages) {
            if(message.level>=level){
                result.push(message.text)
            }
        }
        console.log(result.join(sep))
    }
    return fn;

}