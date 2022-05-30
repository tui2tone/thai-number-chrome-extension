
const excludeDomTagName = ['SCRIPT', 'STYLE']

const start = async () => {

  const allDom = document.getElementsByTagName("*");
  for (var i = 0; i < allDom.length; i++) {
    const item = allDom[i]
    if (item.childNodes.length === 1 && !excludeDomTagName.includes(item.tagName) && item.childNodes[0].nodeType === Node.TEXT_NODE) {
      const rawTextContent = item.textContent;
      const trimedTextContent = rawTextContent?.trim();
      if (trimedTextContent) {
        let replaced = rawTextContent || "";
        replaced = replaced.replace(/1/g, "๑");
        replaced = replaced.replace(/2/g, "๒");
        replaced = replaced.replace(/3/g, "๓");
        replaced = replaced.replace(/4/g, "๔");
        replaced = replaced.replace(/5/g, "๕");
        replaced = replaced.replace(/6/g, "๖");
        replaced = replaced.replace(/7/g, "๗");
        replaced = replaced.replace(/8/g, "๘");
        replaced = replaced.replace(/9/g, "๙");
        replaced = replaced.replace(/0/g, "๐");
        item.textContent = replaced
      }
    }
  }
}


start();
