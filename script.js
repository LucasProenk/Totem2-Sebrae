const buttons = document.querySelectorAll('.option-btn');
const video = document.getElementById('mainVideo');

const videoMap = {
  jeans: 'vdo/jeans.webm',
};

function playItem(item) {
  const src = videoMap[item];
  if (!src) return;
  video.src = src;
  video.currentTime = 0;
  video.play();
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    playItem(btn.dataset.item);
  });
});

// JEANS aceso por padrão, igual à referência
const jeansBtn = document.querySelector('[data-item="jeans"]');
jeansBtn.classList.add('active');
playItem('jeans');
