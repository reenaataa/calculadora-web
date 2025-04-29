function calcular() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operador').value;
    let resultado = 0;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultadoText').innerText = 'Erro:';
        document.getElementById('resultadoValue').innerText = 'Nenhum número selecionado';
        document.getElementById('resultado').style.display = 'block';
        return;
    }

    switch(op) {
        case '+':
            resultado=n1+n2;
            break;
        case '-':
            resultado=n1-n2;
            break;
        case '*':
            resultado=n1*n2;
            break;
        case '/':
            if (n2 !== 0) {
                resultado=n1/n2;
            } else {
                document.getElementById('resultadoText').innerText = 'Erro:';
                document.getElementById('resultadoValue').innerText = 'Divisão por zero';
                document.getElementById('resultado').style.display = 'block';
                return;
            }
            break;
        default:
            document.getElementById('resultado').innerText = 'Operador inválido!';
            return;
    }
    document.getElementById('resultadoText').style.display = 'inline';
    document.getElementById('resultadoValue').innerText = resultado.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
}