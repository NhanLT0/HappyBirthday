function startRain() {
  document.querySelector('.shader').style.display = 'none';

  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const message = "HAPPY BIRTHDAY";
  const letters = message.split("");

  const fontSize = 22;
  const columns = canvas.width / fontSize;
  const drops = new Array(Math.floor(columns)).fill(1);

  function draw() {
    // Tăng độ đậm nền để chữ nổi bật hơn
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff69b4";
    ctx.font = fontSize + "px monospace";
    ctx.shadowColor = "#ff99cc";
    ctx.shadowBlur = 15;

    for (let i = 0; i < drops.length; i++) {
      const text = letters[i % letters.length];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);
}
