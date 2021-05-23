/** fallback for copying text to clipboard to support older browsers */
const fallbackCopyToClipboard = async (text: string): Promise<void> => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    if (!document.execCommand("copy")) throw new Error("failed to copy");
  } finally {
    document.body.removeChild(textArea);
  }
};

/**
 * copy given text to user's clipboard
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  !navigator.clipboard
    ? fallbackCopyToClipboard(text)
    : navigator.clipboard.writeText(text);
};
