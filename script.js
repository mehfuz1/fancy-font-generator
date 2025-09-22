document.getElementById("generateBtn").addEventListener("click", function() {
  let text = document.getElementById("inputText").value.trim();
  let outputArea = document.getElementById("outputArea");
  outputArea.innerHTML = "";

  if (text === "") {
    outputArea.innerHTML = "<p class='output-text'>⚠️ Please enter some text!</p>";
    return;
  }

  // Different fancy font styles
  let styles = [
    text.toUpperCase(), // UPPERCASE
    text.toLowerCase(), // lowercase
    `✦ ${text} ✦`,
    `★彡 ${text} 彡★`,
    `『 ${text} 』`,
    `✧･ﾟ: *✧･ﾟ:* ${text} *:･ﾟ✧*:･ﾟ✧`,
    `⚡${text}⚡`,
    `➤ ${text} ◄`,
    `♡${text}♡`
  ];

  styles.forEach(styledText => {
    let p = document.createElement("p");
    p.classList.add("output-text");
    p.textContent = styledText;
    outputArea.appendChild(p);
  });
});
