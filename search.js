
document.getElementById('searchInput').addEventListener('input', async function() {
  const q = this.value.toLowerCase();
  const res = document.getElementById('searchResults');
  res.innerHTML = "";
  if (q.length < 2) return;
  const snap = await db.collection("ispezioni").get();
  snap.forEach(doc => {
    const d = doc.data();
    if (d.nome.toLowerCase().includes(q) || d.luogo.toLowerCase().includes(q) || (d.note || "").toLowerCase().includes(q)) {
      const li = document.createElement('li');
      li.textContent = `📝 ${d.nome} (${d.luogo}) - ${d.data}`;
      res.appendChild(li);
    }
  });
});
