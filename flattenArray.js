function flattenArray(arr){
    return arr.reduce((prevVal, currentVal) => {
        if(Array.isArray(currentVal)){
            prevVal = prevVal.concat(flattenArray(currentVal));
        }
        else{
            prevVal.push(currentVal);
        }
    },[])
}