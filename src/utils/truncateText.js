function truncateText(text, numWords) {
  const words = text.split(' ')
  if (words.length > numWords) {
    return words.slice(0, numWords).join(' ') + '...'
  }
  return text
}

export default truncateText
