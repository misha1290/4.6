export function saveFeedback(name, email, message) {
    const feedbackData = {
        name: name,
        email: email,
        message: message,
    };

    console.log('Дані форми:', feedbackData);
    // Тут ви можете додати код для зберігання даних на сервері або в базі даних
}
