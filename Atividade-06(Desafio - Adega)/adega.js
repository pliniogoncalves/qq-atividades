/*
 Construa uma solução em JavaScript que permita fazer um levantamento do estoque de vinhos de uma adega. Os tipos de vinho são: 'T' para tinto, 'B' para branco e 'R' para rosé. A aplicação deve:

Aceitar entradas dos tipos de vinho.
Armazenar cada entrada em um array. 
Exibir a lista atualizada de tipos de vinho e o total de cada tipo após cada entrada.
Calcular e exibir a porcentagem de cada tipo sobre o total de vinhos inseridos.
Permitir alterar o tipo de vinho armazenado em uma determinada posição do array.
Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let vinhos=[];

function inserirVinhosMenu(){
    vinhos = [];

    const inserirVinhosContainer = document.getElementById("inserirVinhosContainer");
    inserirVinhosContainer.innerHTML = '';

    inserirVinhosContainer.innerHTML += `
    <label for="vinhos">Digite a opção de Vinho que deseja Armazenar('T' para Tinto, 'B' para Branco e 'R' para Rosé). Se deseja finalizar, Digite "F":</label> 
    <input type="text" id="vinhoInput">
    `;

    document.getElementById("inserirVinhos").style.display = 'block';
}

function armazenarVinhos(){
    const vinhoInput = document.getElementById("vinhoInput").value.toUpperCase();

    switch(true){
        case(vinhoInput == 'T'):
            vinhos.push('Tinto');
            console.log(vinhos);
            alert(`Vinho ${vinhoInput} adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'B'):
            vinhos.push('Branco');
            console.log(vinhos);
            alert(`Vinho ${vinhoInput} adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'R'):
            vinhos.push('Rosé');
            console.log(vinhos);
            alert(`Vinho ${vinhoInput} adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'F'):
            finalizarInsercao();
            break;
        default:
            alert('Opção Inválida! Use "T" para tinto, "B" para branco e "R" para rosé. Se deseja finalizar, Digite "F".');
    }

    /* 
    if(vinhoInput == 'T' || vinhoInput == 'B' || vinhoInput == 'R'){
        vinhos.push(vinhoInput);
        console.log(vinhos);
        alert(`Vinho ${vinhoInput} adicionado.`)
        document.getElementById('vinhoInput').value = '';
    }else if(vinhoInput == 'F'){
        finalizarInsercao();
    }else{
        alert('Opção Inválida! Use "T" para tinto, "B" para branco e "R" para rosé. ')
    }
*/

}

function finalizarInsercao(){
    alert('Inserção de vinhos finalizada!');
    document.getElementById("inserirVinhos").style.display = 'none';
    console.log(vinhos);
}

