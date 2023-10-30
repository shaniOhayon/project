let elmsArr = [];

const createElm = (
  tagName,
  content,
  color,
  width,
  height,
  backgroundColor,
  size
) => {
  let pageDiv = document.getElementById("pageDiv");
  let newElm = document.createElement(tagName);
  pageDiv.appendChild(newElm);
  newElm.innerText = content;
  newElm.style.color = color;
  newElm.style.width = width + "px";
  newElm.style.height = height + "px";
  newElm.style.backgroundColor = backgroundColor;
  newElm.style.fontSize = size + "rem";
  elmsArr.push({
    tagName,
    content,
    color,
    width,
    height,
    backgroundColor,
    size,
  });
};

const clearPage = () => {
  let pageDiv = document.querySelector("#pageDiv");
  pageDiv.innerHTML = "";
};

const restorePage = () => {
  elmsArr = [];
  let newElmsArr = [];
  let jsonStr = localStorage.getItem("tags");
  newElmsArr = JSON.parse(jsonStr);
  for (let item of newElmsArr) {
    createElm(
      item.tagName,
      item.content,
      item.color,
      item.width,
      item.hight,
      item.backgroundColor,
      item.size
    );
  }
};

window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  document.getElementById("submitBtn").addEventListener("click", () => {
    let inputTag = document.getElementById("inputTag");
    let inputContent = document.getElementById("inputContent");
    let inputColor = document.getElementById("inputColor");
    let inputWidth = document.getElementById("inputWidth");
    let inputHeight = document.getElementById("inputHeight");
    let inputBackgrondColor = document.getElementById("inputBackgroundColor");
    let inputSize = document.getElementById("inputSize");
    createElm(
      inputTag.value,
      inputContent.value,
      inputColor.value,
      inputWidth.value,
      inputHeight.value,
      inputBackgrondColor.value,
      inputSize.value
    );
  });
  document.getElementById("saveBtn").addEventListener("click", () => {
    let jsonStr = JSON.stringify(elmsArr);
    localStorage.setItem("tags", jsonStr);
  });
  document.getElementById("clearBtn").addEventListener("click", () => {
    clearPage();
  });
  restorePage();
});
