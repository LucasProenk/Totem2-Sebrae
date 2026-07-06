const buttons = document.querySelectorAll('.option-btn');
const video = document.getElementById('mainVideo');

const videoMap = {
  jeans: 'vdo/Button 1.webm',
  livro: 'vdo/Button 2.webm',
  xicara: 'vdo/Button 3.webm',
  lata: 'vdo/Button 4.webm',
};

function playItem(item, { unmute = false } = {}) {
  const src = videoMap[item];
  if (!src) return;
  video.src = encodeURI(src);
  video.currentTime = 0;
  if (unmute) video.muted = false;
  video.play().catch(() => {
    // autoplay bloqueado (sem gesto do usuário): mantém mudo e tenta de novo
    video.muted = true;
    video.play().catch(() => {});
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    playItem(btn.dataset.item, { unmute: true });
  });
});

// JEANS aceso por padrão, igual à referência — toca sozinho ao abrir
const jeansBtn = document.querySelector('[data-item="jeans"]');
jeansBtn.classList.add('active');
playItem('jeans');
