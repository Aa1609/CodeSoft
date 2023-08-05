var flag = true;
function updateDisplay() {
    document.getElementById('inputDisplay').innerText = input;
    document.getElementById('resultDisplay').innerText = result;
}
let input = '';
let result = 0;

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        switch (buttonValue) {
            case 'AC':
                input = '';
                result = 0;
                break;
            case 'Del':
                input = input.slice(0, -1);
                break;
            case '=':
                flag = false;
                try {
                    result = eval(input);
                } catch (error) {
                    result = 'Error';
                }
                break;
            default:
                if (!flag) { input = ''; }
                input += buttonValue;
                flag = true;
        }
        updateDisplay();
    });
});
updateDisplay();