// Shared portfolio script
// Add custom JavaScript here if needed.

const currentYearElement = document.querySelector('#current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}
