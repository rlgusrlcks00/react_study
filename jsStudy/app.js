const title = document.getElementById("title");
console.dir(title);

title.innerText = "This is change as JS";

function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);

function handleMouseEvent() {
  title.style.color = "red";
}
title.addEventListener("mouseenter", handleMouseEvent);

function handleLeaveMouseEvent() {
  title.style.color = "black";
}
title.addEventListener("mouseleave", handleLeaveMouseEvent);
//___________________________________________________________________

const title2 = document.querySelector(".title2");
console.dir(title2);

function handleEnterMouse() {
  title2.innerText = "WOw!";
}

function handleLeaveMouse() {
  title2.innerText = "OH!";
}
title2.addEventListener("mouseenter", handleEnterMouse);
title2.addEventListener("mouseleave", handleLeaveMouse);

title2.onclick = handleTitleClick;

//__________________________________

function handleWindowCopy(){
    alert("copier");
}
title2.addEventListener("copy", handleWindowCopy);