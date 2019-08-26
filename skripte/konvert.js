var zhconvert = document.getElementById("zh-convert");
zhconvert.onlick = function () {
  if (zhconvert.dataset.zh == "tw") {
    TongWen.trans2Simp(document);
    zhconvert.dataset.zh ="cn";
    setTimeout(function() {
      zhconvert.textContent ="繁";
    },500);
  }else {
    TongWen.trans2Trad(document);
    zhconvert.dataset.zh = "tw";
    setTimeout(function() {
      zhconvert.textContent ="简";
    },500);
  }
}