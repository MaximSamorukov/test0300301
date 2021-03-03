let language = 'ru';
const btn = document.querySelector('#btn');

btn.textContent = lang[language].one;

btn.addEventListener('click', (e) => {
    language = language === 'ru' ? 'en' : 'ru';
    btn.textContent = lang[language].one;
})