
setTimeout(() => {
  alert("Sesi Anda telah habis. Silakan login ulang.");
  localStorage.removeItem("auth_token");
  window.location.href = '../../login.html';
}, 900000); // 15 menit
