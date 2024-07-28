// Получаем элементы с id 'toggle-icon' и 'password'
const toggleIcon = document.getElementById('toggle-icon');
const passwordInput = document.getElementById('password');

// Обработчик клика для переключения классов и видимости пароля
toggleIcon.addEventListener('click', () => {
    // Текущий класс элемента
    const currentClass = toggleIcon.className;
    
    // Переключаем класс между 'ri-eye-line' и 'ri-eye-close-line'
    toggleIcon.className = currentClass === 'ri-eye-line' ? 'ri-eye-close-line' : 'ri-eye-line';
    
    // Переключаем тип поля ввода пароля между 'password' и 'text'
    const currentType = passwordInput.getAttribute('type');
    passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
});