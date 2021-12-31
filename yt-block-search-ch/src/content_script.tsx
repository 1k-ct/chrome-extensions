import iURLs from "./data/channel.json";

const URLs = iURLs.URL;

const hideChannelContent = (channelURL: string) => {
  const content = "#channel-info > a";
  const contentSection = document.querySelectorAll<HTMLLinkElement>(content);

  for (const iSection of contentSection) {
    if (iSection.href == channelURL) {
      // TODO breakは間違い多分
      // とりあえずこのままで
      const item =
        iSection.parentElement?.parentElement?.parentElement?.parentElement ??
        null;
      if (item != null) {
        // break;
        item.style.display = "none";
      }
    }
  }
};

window.addEventListener("load", async () => {
  for (const url of URLs) {
    hideChannelContent(url);
  }
});

window.addEventListener("scroll", async () => {
  for (const url of URLs) {
    hideChannelContent(url);
  }
});
