<!-- ===================== voiceEngine.js ===================== --><script>
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
  const text = event.results[event.results.length - 1][0].transcript.toLowerCase();
  handleVoiceInput(text);
};

function startListening() {
  recognition.start();
}
