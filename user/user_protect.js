const role = localStorage.getItem("role");
if (!role || role === "admin") {
  alert("Akses hanya untuk user biasa.");
  window.location.href = "/login.html";
}
