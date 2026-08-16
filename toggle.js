const KEYS = ["ytFeed", "ytSidebar", "ytComments"];
const CLASS_MAP = {
  ytFeed: "hide-yt-feed",
  ytSidebar: "hide-yt-sidebar",
  ytComments: "hide-yt-comments",
};

chrome.storage.sync.get(KEYS, (result) => {
  KEYS.forEach((key) => {
    const enabled = result[key] !== false; // default ON
    document.documentElement.classList.toggle(CLASS_MAP[key], enabled);
  });
});

chrome.storage.onChanged.addListener((changes) => {
  for (const key in changes) {
    if (CLASS_MAP[key]) {
      const enabled = changes[key].newValue !== false;
      document.documentElement.classList.toggle(CLASS_MAP[key], enabled);
    }
  }
});