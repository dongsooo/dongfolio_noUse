function addHoverEffect(atagClass, hoverClass) {
  const atag = document.querySelector(atagClass);
  const hoverElement = document.querySelector(hoverClass);

  atag.addEventListener("mouseover", function () {
    hoverElement.style.display = "block";
  });

  atag.addEventListener("mouseout", function () {
    hoverElement.style.display = "none";
  });
}

addHoverEffect(".notebookAtag", ".notebookHover");
addHoverEffect(".phoneAtag", ".phoneHover");
addHoverEffect(".bikeAtag", ".bikeHover");
addHoverEffect(".paperAtag", ".paperHover");
addHoverEffect(".gamepadAtag", ".gamepadHover");

function openNewWindow(url) {
  // 새 창의 너비와 높이를 설정합니다.
  let newWindow = window.open(url, "_blank", "width=360,height=740");
  // 포커스를 새 창에 맞춥니다.
  if (newWindow) {
    newWindow.focus();
  }
}
