
document.addEventListener("DOMContentLoaded", () => {
  const logs = JSON.parse(localStorage.getItem("loginLogs") || "[]");

  // Buat 7 hari terakhir
  const days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  const counts = days.map(day => {
    return logs.filter(log => log.startsWith(day)).length;
  });

  const ctx = document.getElementById("loginChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: days,
      datasets: [{
        label: 'Login Harian',
        data: counts,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
