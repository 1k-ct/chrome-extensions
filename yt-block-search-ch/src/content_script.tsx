import { URLs } from "./blockChannel";

interface channelHTMLElement extends HTMLElement {
  href: string | null;
}
const hideChannelContent = (channelURL: string) => {
  // document.querySelector("#channel-info > a").parentElement.__dataHost.style.display = 'none';
  // document.querySelectorAll("#channel-info > a").forEach((data)=>console.log(data.href))
  const content = "#channel-info > a";
  const contentSection = document.querySelectorAll<HTMLLinkElement>(content);

  for (const iSection of contentSection) {
    // if (iSection.__dataHost == null) { return; }
    if (iSection.href == channelURL) {
      // breakは間違い多分
      // iSection.__dataHost.style.display = 'none';
      // const item = iSection.closest<HTMLElement>("ytd-video-renderer");
      // const item = iSection.parentElement.parentElement.parentElement.parentElement
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
  // let defaultUserPreference: userPreference = {
  //   enable: true,
  //   // forbiddenWords: [],
  //   forbiddenChannels: [],
  // };
  // const key = "user_preference_json_key";
  // let userPreference =
  //   (await loadUserPreference(key)) ?? defaultUserPreference;

  // const testUserPreference: userPreference = {
  //   enable: true,
  //   forbiddenChannels: urls
  // }
  // await saveUserPreference(key, testUserPreference)

  // for (const url of userPreference.forbiddenChannels) {
  //   hideChannelContent(url);
  // }
  for (const url of URLs) {
    hideChannelContent(url);
  }
});
// #contents > ytd-video-renderer:nth-child(1)

window.addEventListener("scroll", async () => {
  for (const url of URLs) {
    hideChannelContent(url);
  }
});
