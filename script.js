const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim()) {
    // Simulate receiving a random message (not real-time chat)
    const receivedMessage = "Someone: Hello!";
    addMessage(message, "you");
    addMessage(receivedMessage, "other");
    messageInput.value = "";
  }
});

function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  const messageContent = document.createElement('p');
  messageContent.textContent = message;
  if (sender === "you") {
    messageElement.classList.add('you');
  }
  messageElement.appendChild(messageContent);
  messageList.appendChild(messageElement);
}
