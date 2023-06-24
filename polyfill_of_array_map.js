Array.prototype.map = function(callbackFn){
    const output = [];
    this.forEach((element, index) => {
        output.push(callbackFn(element, index, this))
    })
    return output;
}