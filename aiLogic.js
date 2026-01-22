<!-- ===================== aiLogic.js ===================== --><script>
let memory = [];

function aiResponse(userText) {
  if (userText.includes('time')) return `Current time is ${new Date().toLocaleTimeString()}`;
  if (userText.includes('date')) return `Today's date is ${new Date().toDateString()}`;
  if (userText.includes('hello')) return 'Hello! How can I help you?';
  return 'Sorry, I am still learning 😊';
}
</script>
