function speak() {
  const textToSpeak = document.getElementById("text-to-speak").value;
  const words = textToSpeak.split(/\s+/); // Split text into words

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = textToSpeak;

    utterance.lang = "hi-IN";
    utterance.rate = 1.0;
    utterance.pitch = 0.9;

    // Event handler for when each word is spoken
    utterance.onboundary = (event) => {
      const currentWordIndex = event.charIndex;
      highlightWord(currentWordIndex);
    };

    // Event handler for when speech is finished
    utterance.onend = () => {
      removeHighlight();
    };

    window.speechSynthesis.speak(utterance);
  } else {
    alert(
      "Your browser does not support the Web Speech API. Please use a different browser."
    );
  }

  function highlightWord(index) {
    const wordSpan = document.getElementById(`word-${index}`);
    if (wordSpan) {
      wordSpan.style.fontSize = 30;
    }
  }

  function removeHighlight() {
    words.forEach((word, index) => {
      const wordSpan = document.getElementById(`word-${index}`);
      if (wordSpan) {
        wordSpan.style.backgroundColor = "";
      }
    });
  }
}
