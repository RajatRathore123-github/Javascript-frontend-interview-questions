const ARGS_LEN = 5;
const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    return args.reduce(
      (initialValue, currentValue) => initialValue + currentValue,
      0
    );
  } else {
    const recursiveFn = (...args2) => {
      args = args.concat(args2);
      if (args.length === ARGS_LEN) {
        return args.reduce(
          (initialValue, currentValue) => initialValue + currentValue,
          0
        );
      }
      else {
        return recursiveFn;
      }
    };
    return recursiveFn;
  }
};
