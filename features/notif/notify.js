
// Notifikasi simulasi
function showNotify(msg) {
  const box = document.createElement("div");
  box.innerText = msg;
  box.style = "position:fixed;bottom:20px;right:20px;background:#4ade80;padding:12px;border-radius:8px;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.1);z-index:999;";
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3000);
}
