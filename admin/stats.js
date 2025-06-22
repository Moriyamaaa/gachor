
document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const totalUser = users.filter(u => u.role === "user").length;
  const totalAdmin = users.filter(u => u.role === "admin").length;

  document.getElementById("totalUser").innerText = totalUser;
  document.getElementById("totalAdmin").innerText = totalAdmin;

  const lastLogin = localStorage.getItem("lastLogin") || "Belum ada";
  document.getElementById("lastLogin").innerText = lastLogin;
});
