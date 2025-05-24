document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card.fade-up');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('start');
    }, index * 200); // ← 200 ميلي ثانية بين كل بطاقة والثانية
  });
});
