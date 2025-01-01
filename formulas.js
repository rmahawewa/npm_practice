/***
 * This formula only does adding values. There fore + sign is the one and only sign here
 */
function additions(statement){
    let values = statement.split("+");
    let result = 0;
    for(let i = 0; i < values.length; i++){
        result += values[i];
    }
    return result;
}

/**
 * 
 * @param {*} statement
 * this formula only does substraction. There fore - sign is the only sign here 
 */
function substractions(statement){
    let all_values = statement.split("");
    let values = statement.split("-");
    let result = 0;
    if(all_values[0] === "-"){
        result = 0;
        for(let i = 1; i < values.length; i++){
            result -= values[i];
        }
    }else{
        result = all_values[0];        
        for(let i = 1; i < values.length; i++){
            result -= values[i];
        }
    }
    return result;
}