// Get the editor element
const editor = document.getElementById("editor");

// Add event listener for keyup event
editor.addEventListener("keyup", (event) => {
  // Get the current text of the editor
  const text = editor.textContent;

  // Create a new TextMate grammar instance
  const grammar = new TextMate.Grammar("source.js");

  // Tokenize the text using the grammar
  const tokens = grammar.tokenizeLines(text);

  // Remove all existing spans from the editor
  const spans = editor.querySelectorAll("span");
  spans.forEach((span) => span.remove());

  // Create a new span for each token and add it to the editor
  tokens.forEach((token) => {
    const span = document.createElement("span");
    span.className = token.scopes[0];
    span.textContent = token.value;
    editor.appendChild(span);
  });
});
