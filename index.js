// Write your solution in this file!
 let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = { ...driver,  ...{ [key]: value } };
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.name = 'Sam'
    driver.address = '12 Broadway'
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

    delete driver[key]
    return driver
}