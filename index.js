// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
 return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    let new_obj = Object.assign({}, driver)
    delete new_obj[key];
    return new_obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }