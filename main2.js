
import { TextMateGrammarFactory } from "https://esm.sh/vscode-textmate";

// Load the JavaScript grammar
const grammarFactory = new TextMateGrammarFactory();
const javascriptGrammar = await grammarFactory.loadGrammar("JavaScript.plist");

// Define a function to highlight JavaScript code
const highlightJavaScript = (code) => {
  // Tokenize the code
  const tokens = javascriptGrammar.tokenizeLine(code);

  // Create an HTML string to store the highlighted code
  let html = "";

  // Loop through the tokens and add them to the HTML string
  for (const token of tokens) {
    // Get the CSS class for the token
    const className = javascriptGrammar.tokenToScope(token.scopes[0]);

    // Add the token to the HTML string, wrapped in a span with the appropriate CSS class
    html += `<span class="${className}">${code.substring(token.startIndex, token.endIndex)}</span>`;
  }

  // Return the HTML string
  return html;
};

// Get the JavaScript code from the user
const code = prompt("Enter some JavaScript code:");

// Highlight the code
const highlightedCode = highlightJavaScript(code);

// Output the highlighted code to the console
console.log(highlightedCode);
