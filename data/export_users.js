
function exportUsers() {
  const users = localStorage.getItem("users") || "[]";
  const blob = new Blob([users], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "users.json";
  a.click();
}
