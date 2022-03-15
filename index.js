// Write your solution in this file!
const driver={};


function updateDriverWithKeyAndValue(driver,key,value) {
    let newDriver = Object.assign({...driver},{[key]:value});
    return newDriver;

}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
    Object.assign(driver,{[key]:value});
    return driver;
}

function deleteFromDriverByKey(obj,key) {
    let newDriver = Object.assign({},obj);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj,key) {
    delete obj[key];
    return obj;
}

