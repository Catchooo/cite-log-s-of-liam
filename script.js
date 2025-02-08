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
// Функція для зміни стилю елементів
function changeStyle() {
  // Змінюємо колір фону body
  document.body.style.backgroundColor = "purple";

  // Змінюємо розмір кнопок
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#007bff"; // Колір кнопок
    button.style.color = "white"; // Колір тексту на кнопках
    button.style.border = "none"; // Видаляємо рамку
    button.style.cursor = "pointer"; // Змінюємо курсор на "руку"
  });

  // Додаємо ефект зменшення фото при наведенні миші
  const heroImage = document.querySelector(".hero-image img");
  heroImage.addEventListener("mouseover", () => {
    heroImage.style.transform = "scale(0.9)"; // Зменшуємо масштаб
    heroImage.style.transition = "transform 0.3s ease"; // Додаємо плавний перехід
  });
  heroImage.addEventListener("mouseout", () => {
    heroImage.style.transform = "scale(1)"; // Повертаємо масштаб до початкового значення
  });

  // Змінюємо шрифт
  document.body.style.fontFamily = "Arial, sans-serif"; // Або інший шрифт за вашим бажанням
}

// Викликаємо функцію changeStyle() після завантаження сторінки
window.addEventListener("load", changeStyle);
function changeTextStyle() {
  // Знаходимо всі текстові елементи на сторінці
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, div'); // Додайте інші елементи за необхідності

  // Застосовуємо стилі до кожного елемента
  textElements.forEach(element => {
    element.style.fontWeight = 'bold'; // Робимо текст жирним
    element.style.color = 'white'; // Змінюємо колір тексту на білий
  });
}

// Викликаємо функцію changeTextStyle() після завантаження сторінки
window.addEventListener('load', changeTextStyle);
