import rp from "request-promise";
import { writeFile } from "fs";
import $, { BasicAcceptedElems, Node } from "cheerio";
const url = "https://opensource.org/licenses/alphabetical";

rp(url).then((html: BasicAcceptedElems<Node>) => {
  const licenses: License[] = [];
  const listItems = $("#node-22 > div > div > div > div > ul", html);
  for (const child of listItems.children()) {
    const currentEl = $(child);
    const currentAnchor = $("a", currentEl.html());

    const name = currentAnchor.text().split("(")[0].trim();
    const shortHand = currentAnchor
      .text()
      .replace(name, "")
      .trim()
      .replace("(", "")
      .replace(")", "");

    licenses.push({ name, id: shortHand || undefined });
  }
  writeFile(
    "src/resources/licenses.json",
    JSON.stringify(licenses, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON was saved.");
    }
  );
});
