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

// Додаткові функції (за необхідності)
// ... (наприклад, динамічне завантаження контенту, анімація, інтерактивні елементи)
