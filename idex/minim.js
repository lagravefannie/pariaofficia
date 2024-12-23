function dropLineAndPointFromConfig(config) {
    // Create a shallow copy of the config to avoid mutating the original object
    let newConfig = { ...config };

    // Properties to be removed
    const propertiesToRemove = ['line', 'point'];

    // Iterate over the properties to remove them from the newConfig
    propertiesToRemove.forEach(prop => {
        if (newConfig.hasOwnProperty(prop)) {
            delete newConfig[prop];
        }
    });

    return newConfig;
}

// Example usage:
let config = {
    line: { color: 'red', width: 2 },
    point: { size: 5, shape: 'circle' },
    other: { type: 'bar'}
};

let newConfig = dropLineAndPointFromConfig(config);

console.log(newConfig); 
// Output: { other: { type: 'bar' } }
