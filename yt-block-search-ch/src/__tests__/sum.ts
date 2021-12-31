// import { sum } from "../sum";
// test("1 + 1 = 2", () => {
//   expect(sum(1, 1)).toBe(2);
// });

import { URLs } from "../blockChannel";

function testCheckExistList(urls: string[]): boolean {
  // return
  // trueの場合は、リストに重複する値がある
  for (const url of urls) {
    if (urls.filter((item) => item == url).length > 1) {
      return true;
    }
  }
  return false;
}
function existsArrayItem(items: string[]): string[] {
  let outUrls: string[] = [];
  for (const url of items) {
    const count = items.filter((item) => item == url).length;
    if (count > 1) {
      outUrls.push(url);
    }
  }
  return outUrls;
}
function removeDoubleItemArray(outUrls: string[]): string[] {
  let urls = URLs;
  for (const outUrl of outUrls) {
    const index = urls.indexOf(outUrl);
    if (index > -1) {
      urls.splice(index, 1);
    }
  }
  return urls;
}
test("check exist list item", () => {
  expect(testCheckExistList(URLs)).not.toBe(true);
  // const outUrls = existsArrayItem(URLs);
  // const urls = removeDoubleItemArray(outUrls);
  // console.log(outUrls);
  // console.log(urls.length, URLs.length);
  // expect(existsArrayItem(URLs));
  // console.log(testCheckExistList(URLs));
});
