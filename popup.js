console.log('This is a popup!');

function appendMessage(text) {
    document.getElementById('response').innerHTML += "<p>" + text + "</p>";
}

function sendNativeMessage() {
    console.log("send native message!");
    appendMessage("Send:");
    chrome.runtime.sendNativeMessage(
        'io.k8s.dashboard',
        {command: 'aws eks get-token --region ap-east-1 --cluster-name dragonplus-eks-hk-01'},
        function (response) {
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError);
                console.log('Error: ' + chrome.runtime.lastError.message);
                appendMessage("Error: <b>" + JSON.stringify(chrome.runtime.lastError.message) + "</b>");
            } else {
                console.log(response);
                console.log('Received response: ' + response);
                appendMessage("Received message: <b>" + JSON.stringify(response) + "</b>");
            }
        }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send-message-button').addEventListener(
        'click', sendNativeMessage);
});
