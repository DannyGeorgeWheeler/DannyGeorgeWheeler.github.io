const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener(
        'invalid',
        event => {
            input.classList.add('error');
        },
        false
    );
});