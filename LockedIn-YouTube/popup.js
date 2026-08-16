const KEYS = ["ytFeed", "ytSidebar", "ytComments"];

chrome.storage.sync.get(KEYS, (result) => {
  KEYS.forEach((key) => {
    const box = document.getElementById(key);
    box.checked = result[key] !== false; // default ON
    box.addEventListener("change", () => {
      chrome.storage.sync.set({ [key]: box.checked });
    });
  });
});