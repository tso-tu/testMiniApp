// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;

// Отображаем информацию о пользователе
document.getElementById('user-data').innerHTML = `
    <p>👤 <b>${user.first_name || 'Аноним'}</b></p>
    ${user.username ? `<p>@${user.username}</p>` : ''}
    <p>ID: ${user.id}</p>
`;

// Функция для показа alert
function showAlert() {
    tg.showAlert('Привет от Mini App!');
}

// Функция для отправки данных
function sendData() {
    const data = {
        action: 'button_click',
        timestamp: Date.now(),
        user_id: user.id
    };
    
    // Отправляем данные боту
    tg.sendData(JSON.stringify(data));
    
    tg.showPopup({
        title: 'Успешно!',
        message: 'Данные отправлены',
        buttons: [{ type: 'ok' }]
    });
}

// Закрытие приложения
function closeApp() {
    tg.close();
}

// Показываем главную кнопку
tg.MainButton.text = "Закрыть";
tg.MainButton.show();
tg.MainButton.onClick(closeApp);

// Логируем событие открытия
console.log('App launched:', tg.initDataUnsafe);