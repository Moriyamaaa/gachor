
setInterval(() => {
  const notifs = JSON.parse(localStorage.getItem("notifications") || "[]");
  const container = document.getElementById("notifContainer");
  if (!container) return;

  container.innerHTML = "";
  notifs.slice().reverse().forEach(n => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>[${n.time}]</strong> ${n.content}</p>`;
    container.appendChild(div);
  });
}, 3000);
