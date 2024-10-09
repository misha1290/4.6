import { saveFeedback } from './formData.js';

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігання дефолтній поведінці

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Зберігайте дані форми
    saveFeedback(name, email, message);

    // Показати повідомлення про успішну відправку
    document.getElementById('success-message').classList.remove('hidden');

    // Очистити форму
    event.target.reset();
});
