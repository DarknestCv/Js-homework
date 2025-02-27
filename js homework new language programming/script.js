function runCode() {
    const code = document.getElementById("codeInput").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Компільую...";

    try {
      // Перетворюємо код на JavaScript
      const jsCode = translateToJS(code);

      // Оцінюємо JavaScript код
      const result = eval(jsCode);

      // Виводимо результат
      outputDiv.innerHTML = `<strong>Результат:</strong> ${result}`;
    } catch (error) {
      outputDiv.innerHTML = `<span class="error">Помилка компіляції: ${error.message}</span>`;
    }
  }

  function translateToJS(code) {
    // Перетворюємо ключові слова мови на JavaScript
    let jsCode = code;

    // Заміна ключового слова "ret" на "return"
    jsCode = jsCode.replace(/\bret\b/g, 'return');

    // Заміна ключового слова "ad" на "let" для оголошення змінних
    jsCode = jsCode.replace(/\bad\b/g, 'let');

    // Заміна оператора "ob" на "+"
    jsCode = jsCode.replace(/\bob\b/g, '+');

    return jsCode;
  }