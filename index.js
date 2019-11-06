const worker = new Worker("./worker.js", {
    type: "classic"
});

function sendMessage(message) {
    worker.postMessage(message);
    console.log("Host -> Worker:", message);
}

window.addEventListener("load", () => {
    const $input = document.querySelector("#input");
    const $output = document.querySelector("#output");
    const $run = document.querySelector("#run");

    $run.addEventListener("click", () => {
        sendMessage($input.value);
    });

    worker.onmessage = e => {
        console.log("Worker -> Host:", e.data);
        const {result, duration} = e.data;
        $output.innerHTML += `<div>${result} took ${duration}ms</div>`;
    };
});