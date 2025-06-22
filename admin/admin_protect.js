const role = localStorage.getItem("role");
if (role !== "admin") {
  alert("Akses ditolak. Anda bukan admin.");
  window.location.href = "/login.html";
}
