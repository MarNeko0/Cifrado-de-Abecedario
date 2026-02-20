function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
        html.removeAttribute('data-theme');
        document.getElementById('themeToggle').innerText = "🌙 Modo Oscuro";
    } else {
        html.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerText = "☀️ Modo Claro";
    }
}

function toggleShift() {
    const method = document.getElementById('method').value;
    document.getElementById('shiftContainer').style.opacity = method === 'atbash' ? '0.3' : '1';
}

function process(isEncrypting) {
    const text = document.getElementById('inputText').value;
    const alphabet = document.getElementById('alphabet').value;
    const method = document.getElementById('method').value;
    const shift = parseInt(document.getElementById('shift').value) || 0;
    
    let result = "";

    for (let char of text) {
        let index = alphabet.indexOf(char);

        if (index === -1) {
            result += char;
            continue;
        }

        if (method === "cesar") {
            // Lógica matemática robusta para el módulo (funciona con negativos)
            let newIndex;
            if (isEncrypting) {
                newIndex = (index + shift) % alphabet.length;
            } else {
                newIndex = (index - shift) % alphabet.length;
                if (newIndex < 0) newIndex += alphabet.length;
            }
            result += alphabet[newIndex];
        } else {
            // Atbash es su propio inverso
            let newIndex = (alphabet.length - 1) - index;
            result += alphabet[newIndex];
        }
    }
    document.getElementById('outputText').value = result;
}

function clearInput() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
    // Opcional: poner el foco de nuevo en el cuadro de entrada
    document.getElementById('inputText').focus();
}

function copyResult() {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
}