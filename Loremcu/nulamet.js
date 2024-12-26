// Sample context object with nested data structure
let ctx = {
    data: {
        root: {
            input: "some value"
        }
    }
};

// Destination object
let root = {};

// Assigning the value from ctx.data.root.input to root.source
root.source = ctx.data.root.input;

console.log(root.source); // Output: "some value"
