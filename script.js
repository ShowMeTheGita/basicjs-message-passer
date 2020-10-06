const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', showMessage);

function showMessage() {
    let content = messageIn.value;

    if (content === '') {
        alert('Please enter some text')
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}