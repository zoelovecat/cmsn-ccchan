/** 00:00 ngày 6 tháng 10 — múi giờ Nhật Bản (Asia/Tokyo, UTC+9) */
var UNLOCK_CONFIG = {
  unlockAt: "2026-10-06T00:00:00+09:00",
  cardPage: "card.html",
  gatePage: "index.html",
};

function getUnlockTimestamp() {
  return new Date(UNLOCK_CONFIG.unlockAt).getTime();
}

function isUnlocked() {
  return Date.now() >= getUnlockTimestamp();
}

function redirectIfUnlocked() {
  if (isUnlocked()) {
    window.location.replace(UNLOCK_CONFIG.cardPage);
    return true;
  }
  return false;
}

function redirectIfLocked() {
  if (!isUnlocked()) {
    window.location.replace(UNLOCK_CONFIG.gatePage);
    return true;
  }
  return false;
}

function getRemainingMs() {
  return Math.max(0, getUnlockTimestamp() - Date.now());
}

/** Thời gian hiện tại theo giờ Nhật (để hiển thị) */
function formatNowInJapan() {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Tokyo",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}

function splitCountdown(ms) {
  var totalSec = Math.floor(ms / 1000);
  var days = Math.floor(totalSec / 86400);
  totalSec %= 86400;
  var hours = Math.floor(totalSec / 3600);
  totalSec %= 3600;
  var minutes = Math.floor(totalSec / 60);
  var seconds = totalSec % 60;
  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}

function pad2(n) {
  return String(n).padStart(2, "0");
}
