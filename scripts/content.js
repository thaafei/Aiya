function renderRemoveContent(yuckyAI) {
  // If no AI overview, skip
  if (!yuckyAI) {
    return;
  }
  console.log("AI overview found: ZAP!")
  sparrow = document.createElement("div")
  sparrow.innerText = "AI Overview Removed Sir! (￣^￣ )ゞ"
  parent = yuckyAI.parentElement
  parent.replaceChildren(sparrow)
}

renderRemoveContent(document.querySelector('[data-mcp], [data-mcpr]'));