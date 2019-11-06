onmessage = function(e) {
    console.log("Worker:", e);
    const count = parseInt(e.data, 10);

    const startTime = performance.now();
    const result = compute(count);
    const duration = performance.now() - startTime;

    postMessage({result, duration});
};

function compute(size) {
    const inputs = [];
    for (let i = 0; i < size; i++) {
        inputs.push(Math.random());
    }
    return inputs.reduce((a, b) => a + b, 0);
}