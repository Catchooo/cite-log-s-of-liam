// Плавне прокручування до розділів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Валідація форми (приклад)
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    let isValid = true;

    // Перевірка імені
    const nameInput = form.querySelector('input[type="text"]');
    if (nameInput.value.trim() === "") {
        alert("Будь ласка, введіть ваше ім'я.");
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Перевірка email (приклад)
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput.value.trim() === "") {
        alert("Будь ласка, введіть ваш email.");
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault(); // Зупиняємо відправку форми, якщо є помилки
    }
});
// ... (інші функції JavaScript)

// Анімація кола завантаження
// Створюємо елемент кола завантаження
const loadingCircle = document.createElement('div');
loadingCircle.classList.add('loading-circle');

// Додаємо коло завантаження на сторінку
document.body.appendChild(loadingCircle);

// Ховаємо коло завантаження після завантаження сторінки
window.addEventListener('load', () => {
    loadingCircle.style.display = 'none';
});
