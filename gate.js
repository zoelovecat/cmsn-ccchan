(function () {
  if (redirectIfUnlocked()) return;

  var cdText = document.getElementById("cd-text");

  function formatRemainingVi(ms) {
    var parts = splitCountdown(ms);
    var line1 = [];
    var line2 = [];
    if (parts.days > 0) {
      line1.push(parts.days + " ngày");
    }
    line2.push(pad2(parts.hours) + " giờ");
    line2.push(pad2(parts.minutes) + " phút");
    line2.push(pad2(parts.seconds) + " giây");
    if (line1.length) {
      return line1.join(" ") + "\n" + line2.join(" ");
    }
    return line2.join(" ");
  }

  function tick() {
    if (isUnlocked()) {
      redirectIfUnlocked();
      return;
    }
    if (cdText) {
      cdText.textContent = formatRemainingVi(getRemainingMs());
    }
  }

  tick();
  setInterval(tick, 1000);
})();
