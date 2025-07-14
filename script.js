function startSurprise() {
  // Ẩn nút bất ngờ
  document.querySelector('.shader').style.display = 'none';

  // Tạo hiệu ứng chữ bay loạn vĩnh viễn
  setInterval(() => {
    const hb = document.createElement('div');
    hb.classList.add('hb');
    hb.textContent = 'Happy Birthday';

    // Random vị trí ban đầu
    hb.style.left = Math.random() * 100 + 'vw';
    hb.style.top = Math.random() * 100 + 'vh';

    // Random đường bay
    hb.style.setProperty('--x', (Math.random() * 200 - 100) + 'vw');
    hb.style.setProperty('--y', (Math.random() * -150) + 'vh');
    hb.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
    hb.style.setProperty('--s', (Math.random() * 1.5 + 0.5));

    // Màu hồng ngẫu nhiên
    const hue = 330 + Math.random() * 20;
    const light = 60 + Math.random() * 20;
    hb.style.color = `hsl(${hue}, 100%, ${light}%)`;

    document.body.appendChild(hb);

    // Xoá sau 5s
    setTimeout(() => {
      hb.remove();
    }, 5000);
  }, 200); // mỗi 200ms tạo 1 chữ
}
