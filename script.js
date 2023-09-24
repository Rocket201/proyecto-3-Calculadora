function calculate(){
     
    const num1 = parseFloat(document.getElementById('num1').value);

    const num2 = parseFloat(document.getElementById('num2').value);


    const operador = document.getElementById('operador').value;


    switch (operador){

        case 'add' :
            result = num1 + num2;
            break;
        case 'substract' :
            result = num1 - num2;
        break;
        case 'multiply' :
            result = num1 * num2;
        break;
        case 'divide' :
            if(num2 === 0){ result='indivisible';}
            else{result = num1/num2;}
        break;

        default:

        result = 'operacion no valida';
    }

document.getElementById('result').textContent = 'Resultado: '+result;

}