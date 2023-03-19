const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {

    const h = Math.floor(seconds/ 3600); // Получаем часы
    const m = Math.floor((seconds % 3600) / 60); // Получаем минуты
    const s = Math.floor((seconds % 3600) % 60); // Получаем секунды

    if (seconds <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else {
        // Выводим строку в блок для показа таймера
        timerEl.innerHTML = `${Math.trunc(h)}:${Math.trunc(m)}:${s}`;
    }
    --seconds; // Уменьшаем таймер
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
