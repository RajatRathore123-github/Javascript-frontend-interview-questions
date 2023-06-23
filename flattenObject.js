function flattenObject(obj, parent){
    const finalObj = {};
    const generateFlatObjects = (obj, parent) => {
        for(let key in obj){
            const newParent = parent+key;
            const value = obj[key];
            if(typeof value === "object"){
                generateFlatObjects(value, newParent+".");
            }
            else{
                finalObj[newParent] = value;
            }
        }
    }
    generateFlatObjects(obj, parent);
    return finalObj;
}