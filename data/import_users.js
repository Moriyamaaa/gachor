
function importUsers(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data)) {
        localStorage.setItem("users", JSON.stringify(data));
        alert("Data user berhasil diimpor!");
      } else {
        alert("Format file tidak valid!");
      }
    } catch (err) {
      alert("Gagal membaca file.");
    }
  };
  reader.readAsText(file);
}
