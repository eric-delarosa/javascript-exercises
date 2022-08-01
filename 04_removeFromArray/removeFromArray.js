const removeFromArray = function(array, ...args) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let flag = false;
        for(let arg of args){
            if (array[i] === arg){
                flag = true;
            }
        }       
        if (flag !== true){
            result.push(array[i]);
        }
        
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
