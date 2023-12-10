function speak() {
  const textToSpeak = document.getElementById("text-to-speak").value;

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang = "hi-IN";
    utterance.rate = 1.0;
    utterance.pitch = 0.9;

    window.speechSynthesis.speak(utterance);
  } else {
    alert(
      "Your browser does not support the Web Speech API. Please use a different browser."
    );
  }
}
