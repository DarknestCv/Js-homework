// !! 1
function checkText() {
    const textarea = document.getElementById('textarea1');
    const input = document.getElementById('input1');
    const text = textarea.value;
    const searchText = input.value;

    if (text.includes(searchText)) {
        textarea.style.borderColor = 'lime';
    } else {
        textarea.style.borderColor = 'orange';
    }
}

// !! 2
function duplicateSymbols() {
    const textarea = document.getElementById('textarea2');
    const text = textarea.value;
    const symbol = '#';  // Вибрано символ для дублювання
    const newText = text.replace(new RegExp(`\\${symbol}`, 'g'), `${symbol}${symbol}`);
    textarea.value = newText;
}

// !! 3
function reverseNumbers() {
    const textarea = document.getElementById('textarea3');
    let text = textarea.value;
    text = text.replace(/\b(\d{2})\b/g, function(match) {
        return match.split('').reverse().join('');
    });
    textarea.value = text;
}