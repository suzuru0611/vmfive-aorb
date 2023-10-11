// 廣告關閉功能
function closeAdContainer() {
  var adContainer = document.getElementById("adContainer");
  adContainer.style.display = "none";
}

// 關閉左滿版畫面
function closeLeftExpand() {
  var leftExpand = document.getElementById("leftExpand");
  leftExpand.style.animation = "shrinkAnimation 0.5s forwards ";
}

// 關閉右滿版畫面
function closeRightExpand() {
  var rightExpand = document.getElementById("rightExpand");
  rightExpand.style.animation = "shrinkAnimation 0.5s forwards";
}

// 滿版畫面與跳轉廣告連結
document.addEventListener("DOMContentLoaded", function () {
  var leftContainer = document.querySelector(".left");
  var leftExpand = document.querySelector("#left-expand");
  var rightContainer = document.querySelector(".right");
  var rightExpand = document.querySelector("#right-expand");

  leftContainer.addEventListener("click", function () {
    leftExpand.style.display = "block";
  });
  rightContainer.addEventListener("click", function () {
    rightExpand.style.display = "block";
  });
  leftExpand.addEventListener("click", function () {
    window.location.href = "https://suzuru0611.github.io/vmfive-aorb/"; // 先假定首頁為跳往廣告的頁面
  });
  rightExpand.addEventListener("click", function () {
    window.location.href = "https://suzuru0611.github.io/vmfive-aorb/"; // 先假定首頁為跳往廣告的頁面
  });
});
