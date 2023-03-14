//-----throttle------//
import throttle from "lodash.throttle";

//-----ВИЗНАЧЕННЯ ЕЛЕМЕНТІВ І ЗМІННИХ------//

// елемент форми
const feedbackForm = document.querySelector('.feedback-form');

// деструктуризуємо елементи форми 
const {email, message} = feedbackForm;

// автозаповнення форми, якщо є в докалсторідж дані
fillForm();

//-----СЛУХАЧІ------//

// чіпляємо слухача на фому на зміну полів 
feedbackForm.addEventListener('input', throttle(saveFormData, 500));

// чіпляємо слухача на фому на сабміт
feedbackForm.addEventListener('submit', handleSubmit);

//-----ОБРОБНИКИ------//

// функція збереження даних форми в локальне сховище
function saveFormData() {
    const formData = {email: email.value, message: message.value};
localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

// функція очистки локал сторіжд і елементів форми при сабміт форми
function handleSubmit (evt) {
// робим щоб сторінка не перезавантажувалась
evt.preventDefault(); 
// консолимо дані форми
const formData = {email: email.value, message: message.value};
console.log(formData);
// видаляємо локал сторідж
localStorage.removeItem("feedback-form-state");
// очищаємо форму
evt.currentTarget.reset();
}

// функція заповнення форми, якщо є локалсторідж
function fillForm(){
const formData = JSON.parse(localStorage.getItem("feedback-form-state"));

if(formData) {
    email.value = formData.email;
    message.value = formData.message;
}
}