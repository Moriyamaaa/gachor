
// Guard akses berdasarkan auth token
(function() {
  const allow = window.location.href.includes("login") || window.location.href.includes("register");
  const token = localStorage.getItem("auth_token");
  if (!allow && !token) {
    alert("Anda harus login terlebih dahulu.");
    location.href = "../../login.html";
  }
})();
