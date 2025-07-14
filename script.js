function startSurprise() {
  document.querySelector('.shader').style.display = 'none';

  let counter = 0;

  setInterval(() => {
    const hb = document.createElement('div');
    hb.classList.add('hb');
    hb.textContent = 'Happy Birthday';

    // Random vị trí dọc
    const startY = Math.random() * 80 + 10; // 10vh đến 90vh
    hb.style.top = startY + 'vh';

    // Thêm độ trễ để lệch pha rắn
    hb.style.animationDelay = (Math.random() * 0.5) + 's';

    document.body.appendChild(hb);

    setTimeout(() => {
      hb.remove();
    }, 6000);
  }, 300); // mỗi 300ms 1 con rắn bay
}
