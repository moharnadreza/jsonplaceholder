
/**
 * data
 */
const data=require('./../data.json')


/**
 * function for get one item from an array of objects
 * @param {String} field 
 * @param {Int} id 
 */
const getDataById = (field, id) => {
    let result = {}
    for (item of data[field]) {
        if (item['id'] == id) {
            result = item;
            break;
        }
    }
    return result;
}

module.exports = getDataById;