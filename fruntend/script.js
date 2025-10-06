document.getElementById("deploy-time").textContent = new Date().toLocaleString();

async function loadDeployments() {
  try {
    const res = await fetch('http://localhost:3000/deployments');
    const data = await res.json();
    const container = document.getElementById("deployments");
    data.forEach(d => {
      const p = document.createElement('p');
      p.textContent = `Version: ${d.Version}, Deployed At: ${new Date(d.DeployedAt).toLocaleString()}`;
      container.appendChild(p);
    });
  } catch (err) {
    console.error(err);
  }
}
loadDeployments();
