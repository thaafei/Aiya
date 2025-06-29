function renderRemoveContent(yuckyAI) {
  // If no AI overview, skip
  if (!yuckyAI) {
    return;
  }
  console.log("AI content found")
  yuckyAI.remove()
}

renderRemoveContent(document.querySelector('[data-hveid="CAcQBg"]'));