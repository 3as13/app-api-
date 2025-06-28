const id = new URLSearchParams(location.search).get("id");
const form = document.getElementById("form");

db.collection("ispezioni").doc(id).get().then(doc => {
  const d = doc.data();
  document.getElementById("data").value = d.data;
  document.getElementById("nome").value = d.nome;
  document.getElementById("luogo").value = d.luogo;
  document.getElementById("telai").value = d.telai;
  document.getElementById("regina").checked = d.regina;
  document.getElementById("covata").checked = d.covata;
  document.getElementById("melario").checked = d.melario;
  document.getElementById("candito").checked = d.candito;
  document.getElementById("note").value = d.note || "";
});

form.addEventListener("submit", async e => {
  e.preventDefault();
  const aggiorna = {
    data: document.getElementById("data").value,
    nome: document.getElementById("nome").value,
    luogo: document.getElementById("luogo").value,
    telai: parseInt(document.getElementById("telai").value),
    regina: document.getElementById("regina").checked,
    covata: document.getElementById("covata").checked,
    melario: document.getElementById("melario").checked,
    candito: document.getElementById("candito").checked,
    note: document.getElementById("note").value
  };
  await db.collection("ispezioni").doc(id).update(aggiorna);
  alert("Ispezione modificata!");
  location.href = `arnia.html?luogo=${encodeURIComponent(aggiorna.luogo)}&arnia=${encodeURIComponent(aggiorna.nome)}`;
});
