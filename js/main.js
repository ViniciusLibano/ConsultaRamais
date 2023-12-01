let listRamais = JSON.parse(listJSON).ramais;
let tbRamais = document.getElementById('tbRamais');
let btnCopiar = document.querySelectorAll('#copiarRamal');

for (let i = 0; i < listRamais.length; i++) {
    let dsEmpresa;

    if (listRamais[i].empresa == '6') {
        dsEmpresa = listRamais[i].empresa + ' - HSOR';
    }

    switch(listRamais[i].empresa) {
        case '6':
            dsEmpresa = listRamais[i].empresa + ' - HSOR';
            break;
        case '5':
            dsEmpresa = listRamais[i].empresa + ' - HSJC';
            break;
        case '8':
            dsEmpresa = listRamais[i].empresa + ' - HM';
            break;
        case '1':
            dsEmpresa = listRamais[i].empresa + ' - EC';
            break;
        default:
            dsEmpresa = 'Outros';
            break
    }

    let temp = `<tr> <td>${dsEmpresa}</td> <td>${listRamais[i].descricao}</td> <td><span id="copiarRamal">${listRamais[i].ramal}</span></td> </tr>`;
    tbRamais.innerHTML += temp;
}

for (i = 0; i < btnCopiar.length; i++) {
    btnCopiar[i].addEventListener('click', (e) => {
                navigator.clipboard.writeText(e.target.innerText);
    });
}

function procurarRamal() {
    let input, filter, table, tr;
    input =  document.getElementById('srcRamais');
    filter = input.value.toUpperCase();
    table = document.getElementById('mainTable');
    tr = table.querySelectorAll('tr');

    for (let i = 0; i < tr.length; i++) {
        let td0 = tr[i].querySelectorAll('td')[0];
        let td1 = tr[i].querySelectorAll('td')[1];
        let td2 = tr[i].querySelectorAll('td')[2];
        if (td1 || td2 || td0) {
            let txtValue0 = td0.textContent || td1.innerText;
            let txtValue1 = td1.textContent || td1.innerText;
            let txtValue2 = td2.textContent || td2.innerText;
            if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.getElementById('srcRamais').addEventListener('input', (e) => {
    procurarRamal();
}, false);