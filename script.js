function startSurprise() {
  // Ẩn lớp shader
  document.querySelector('.shader').style.display = 'none';

  // Tạo hiệu ứng chữ bay kiểu uốn lượn
  setInterval(() => {
    const hb = document.createElement('div');
    hb.classList.add('hb');
    hb.textContent = 'Happy Birthday';

    // Random vị trí ban đầu (bên trái và dưới lên)
    const startY = Math.random() * 80 + 10; // từ 10vh đến 90vh
    hb.style.top = startY + 'vh';
    hb.style.left = '-200px'; // bắt đầu ngoài màn hình bên trái

    // Thêm vào body
    document.body.appendChild(hb);

    // Xóa sau animation
    setTimeout(() => {
      hb.remove();
    }, 6000); // trùng với thời gian animation
  }, 300); // mỗi 300ms tạo 1 chữ
}
