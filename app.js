  <!-- ===================== app.js ===================== --><script>
const micBtn = document.getElementById('micBtn');
const chatBox = document.getElementById('chatBox');

micBtn.onclick = () => startListening();

// ================= SAFE REMINDER & FOCUS MODE =================
let lastInteraction = Date.now();
let reminderInterval = setInterval(() => {
  const now = Date.now();
  if (now - lastInteraction > 120000) { // 2 minutes inactivity
    const msg = "I'm here 😊 Do you want help with something?";
    addChat('VAMI', msg);
    speak(msg);
    lastInteraction = Date.now();
  }
}, 30000);

function handleVoiceInput(text)(text) {
  const wakeWord = document.getElementById('wakeWord').value.toLowerCase();
  if (!text.includes(wakeWord)) return;

  const command = text.replace(wakeWord, '').trim();
  addChat('You', command);
  lastInteraction = Date.now();

  const reply = aiResponse(command);
  addChat('VAMI', reply);
  speak(reply);
}

function addChat(sender, msg) {
  chatBox.innerHTML += `<p><strong>${sender}:</strong> ${msg}</p>`;
}

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

// ================= MANUAL STOP ASSISTANT =================
function stopAssistant() {
  recognition.stop();
  addChat('VAMI', 'Assistant stopped. You can start again anytime.');
}

function bookAppointment() {
  document.getElementById('appointmentStatus').innerText = '✅ Appointment Booked Successfully';
}

function generateSummary() {
  const text = document.getElementById('callText').value;
  document.getElementById('summary').innerText = 'Summary: This call discussed important points.';
}
</script>
