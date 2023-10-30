const list = () => {
  let item = document.getElementById("item").value;
  let myLi = document.createElement("li");
  let myUl = document.getElementById("listUl");
  myUl.appendChild(myLi);
  myLi.innerHTML = item;
  myLi.style.color = "white";
  myLi.style.fontSize = "3.5vmin";
  myLi.style.listStyleType = "none";
  let arr = JSON.parse(localStorage.getItem("myItem"));
  arr.push(item);
  localStorage.setItem("myItem", JSON.stringify(arr));
};
window.addEventListener("load", () => {
  document.getElementById("btn").addEventListener("click", () => {
    list();
  });
});
