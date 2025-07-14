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
    // Làm tối nền rõ hơn để tránh ám màu glow
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff69b4"; // Hồng đẹp
    ctx.font = fontSize + "px monospace";

    // Giảm glow hoặc bỏ glow hoàn toàn nếu bà muốn siêu sạch
    ctx.shadowColor = "#ff69b4"; // Vẫn hồng nhưng ít sáng
    ctx.shadowBlur = 6;          // Giảm blur từ 15 → 6

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
