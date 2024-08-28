// Shift + t para alert
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.shiftKey) {
      if (event.key === "Enter") {
        alert("Shift + Enter");
      }
    }
  });
});
