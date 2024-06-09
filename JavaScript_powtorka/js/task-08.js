
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (!emailInput.value || !passwordInput.value) {
        alert('Wszystkie pola powinny zostać wypełnione!');
        return;
    }

    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    console.log('Wartości formularza:', formData);

    loginForm.reset();
});
