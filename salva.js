
function salva() {
  const data = {
    nome: document.getElementById('nome').value,
    luogo: document.getElementById('luogo').value,
    data: document.getElementById('data').value,
    telai: parseInt(document.getElementById('telai').value),
    regina: document.getElementById('regina').checked,
    covata: document.getElementById('covata').checked,
    melario: document.getElementById('melario').checked,
    candito: document.getElementById('candito').checked,
    note: document.getElementById('note').value
  };
  db.collection("ispezioni").add(data).then(() => {
    alert("Ispezione salvata!");
    location.href = "index.html";
  });
}
