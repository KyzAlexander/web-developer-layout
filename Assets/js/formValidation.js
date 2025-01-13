document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const showError = (input, message) => {
    const errorElement = input.parentElement.querySelector('.contacts__form--errorMessage');
    errorElement.textContent = message;
    errorElement.classList.add('active');
  };

  const clearError = (input) => {
    const errorElement = input.parentElement.querySelector('.contacts__form--errorMessage');
    errorElement.textContent = '';
    errorElement.classList.remove('active');
  };

  const validateForm = () => {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Введите имя');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Некорректная почта');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Введите сообщение');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    return isValid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Ошибка при отправке формы.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Данные успешно отправлены:', data);
          alert('Сообщение отправлено успешно!');
          form.reset();
        })
        .catch((error) => {
          console.error('Ошибка:', error);
          alert('Не удалось отправить сообщение. Попробуйте позже.');
        });
    }
  });
});
