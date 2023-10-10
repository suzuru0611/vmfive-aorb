function closeAdContainer() {
  const adContainer = document.getElementById("adContainer");
  adContainer.style.display = "none";
}

function closeLeftExpand() {
  const leftExpand = document.getElementById("leftExpand");
  leftExpand.style.animation = "shrinkAnimation 0.5s forwards "; // 將這一行添加到函數中
}

function closeRightExpand() {
  const rightExpand = document.getElementById("rightExpand");
  rightExpand.style.animation = "shrinkAnimation 0.5s forwards";
}

document.addEventListener("DOMContentLoaded", function () {
  const leftContainer = document.querySelector(".left");
  const leftExpand = document.querySelector(".left-expand");
  const rightContainer = document.querySelector(".right");
  const rightExpand = document.querySelector(".right-expand");

  leftContainer.addEventListener("click", function () {
    leftExpand.style.display = "block";
  });
  rightContainer.addEventListener("click", function () {
    rightExpand.style.display = "block";
  });
  leftExpand.addEventListener("click", function () {
    window.location.href = "/index.html"; // 先假定首頁為跳往廣告的頁面
  });
  rightExpand.addEventListener("click", function () {
    window.location.href = "/index.html"; // 先假定首頁為跳往廣告的頁面
  });
});
