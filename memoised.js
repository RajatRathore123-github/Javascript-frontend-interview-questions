const memoise = (fn) => {
    const cache = {}
    return (...args) =>  {
        const argsToString = JSON.stringify(args);
        if(argsToString in cache){
            return cache[argsToString];
        }
        else{
            const result = fn.apply(this, args);
            cache[argsToString] = result;
            return result;
        }
    }
}