
db.collection("ispezioni").get().then(snap => {
  const luoghi = {};
  snap.forEach(doc => {
    const isp = doc.data();
    if (!luoghi[isp.luogo]) luoghi[isp.luogo] = [];
    luoghi[isp.luogo].push(isp);
  });
  const div = document.getElementById('luoghi');
  for (const luogo in luoghi) {
    const btn = document.createElement('button');
    btn.textContent = luogo + " (" + luoghi[luogo].length + ")";
    btn.onclick = () => {
      localStorage.setItem("luogo", luogo);
      location.href = "ispezioni.html";
    };
    div.appendChild(btn);
  }
});
