// Change text content and style
document.getElementById('changeBtn').addEventListener('click', function () {
  const intro = document.getElementById('intro-text');
  intro.textContent = "You've changed the text with JavaScript!";
  intro.style.color = 'white';
  intro.style.backgroundColor = 'teal';
  intro.style.padding = '10px';
  intro.style.borderRadius = '5px';
});

// Add an element dynamically
document.getElementById('addBtn').addEventListener('click', function () {
  const container = document.getElementById('message-container');
  const newMessage = document.createElement('p');
  newMessage.textContent = "Hello! I'm a new message.";
  newMessage.className = 'new-message';
  container.appendChild(newMessage);
});

// Remove last added message
document.getElementById('removeBtn').addEventListener('click', function () {
  const container = document.getElementById('message-container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
