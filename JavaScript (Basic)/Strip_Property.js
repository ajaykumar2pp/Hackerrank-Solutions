'use struct'

function stripProperty(obj,prop){
    delete obj[prop]
    return obj;
    return {};
}