/*
    Como calcular o IMC?
    IMC = peso / (altura * altura)

 */

const peso = 54;
const altura = 1.62;
const IMC = Number((peso / (altura**2)).toFixed(2));

// console.log(typeof(IMC));
// console.log(IMC);

switch (true){
    case IMC < 17:
        console.log('Muito abaixo do peso');
        break;

    case IMC >= 17 && IMC <= 18.49:
        console.log('Abaixo do Peso');
        break;

    case IMC >= 18.5 && IMC <= 24.99:
        console.log('Peso normal');
        break;
    
    case IMC >= 25 && IMC <=29.99:
        console.log('Acima do peso');
        break;

    case IMC >= 30 && IMC <= 34.99:
        console.log('Obesidade I');
        break;

    case IMC >= 35 && IMC <= 39.99:
        console.log('Obesidade II');
        break;
}