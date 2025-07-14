function startSurprise() {
  // Ẩn nút
  document.querySelector('.shader').style.display = 'none';

  // Bắt đầu tạo chữ bay loạn vĩnh viễn
  setInterval(() => {
    const hb = document.createElement('div');
    hb.classList.add('hb');
    hb.textContent = 'Happy Birthday';

    // Random vị trí bắt đầu
    hb.style.left = Math.random() * 100 + 'vw';
    hb.style.top = Math.random() * 100 + 'vh';

    // Random hướng bay
    hb.style.setProperty('--x', (Math.random() * 200 - 100) + 'vw');
    hb.style.setProperty('--y', (Math.random() * -150) + 'vh');
    hb.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
    hb.style.setProperty('--s', (Math.random() * 1.5 + 0.5));

    // Random màu hồng đậm nhạt
    const hue = 330 + Math.random() * 20;
    const light = 60 + Math.random() * 20;
    hb.style.color = `hsl(${hue}, 100%, ${light}%)`;

    document.body.appendChild(hb);

    // Xoá sau 5s
    setTimeout(() => {
      hb.remove();
    }, 5000);
  }, 200); // tạo 1 chữ mỗi 200ms
}
