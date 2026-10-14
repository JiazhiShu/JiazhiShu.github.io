'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.copy-citation').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.parentElement.querySelector('pre').textContent;
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied!';
      status.textContent = 'Citation copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy citation'; }, 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(button.parentElement.querySelector('pre'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
      button.textContent = 'Selected — press Ctrl/Cmd+C';
    }
  });
});
