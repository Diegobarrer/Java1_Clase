let numTiquetes = 200;
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;

do {


    alert("digite el numero del viaje que desee \n digte uno para: medellin MIAMI  \n  digite 2 para MEDELLIN-BOGOTA-ROMA \n digite 3 para MEDELLIN-PANAMA-LOS ANGELES \n digite 4 para MEDELLIN-BOGOTA-MADRID \n numero de tiquetes" + numTiquetes);

    let opc = (prompt("digite la opcion que desee"));



    switch (opc) {

        case "1":
            let tiqueteVendido1 = parseInt(prompt("digite el numero de tiquetes vendidos para medellin miami"));

            if (tiqueteVendido1 <= numTiquetes) {
                numTiquetes = numTiquetes - tiqueteVendido1;
                alert("tiquetes vendidos exitosamente");
                cont1 = cont1 + tiqueteVendido1;
            }

            break;
        case "2":
            let tiqueteVendido2 = parseInt(prompt("digite el numero de tiquetes vendidos para medellin-bogota-roma"));

            if (tiqueteVendido2 <= numTiquetes) {
                numTiquetes = numTiquetes - tiqueteVendido2;
                alert("tiquetes vendidos exitosamente");
                cont2 = cont2 + tiqueteVendido2;
            }
            break;

        case "3":
            let tiqueteVendido3 = parseInt(prompt("digite el numero de tiquetes vendidos para medellin-panama-los angeles"));

            if (tiqueteVendido3 <= numTiquetes) {
                numTiquetes = numTiquetes - tiqueteVendido3;
                alert("tiquetes vendidos exitosamente");
                cont3 = cont3 + tiqueteVendido3;
            }

            break;

        case "4":
            let tiqueteVendido4 = parseInt(prompt("digite el numero de tiquetes vendidos para medellin madrid"));

            if (tiqueteVendido4 <= numTiquetes) {
                numTiquetes = numTiquetes - tiqueteVendido4;
                alert("tiquetes vendidos exitosamente");
                cont4 = cont4 + tiqueteVendido4;
            }

            break;

    }
    alert("tiquetes disponibles " + numTiquetes);
} while (numTiquetes > 0);

alert("programa finalizado exitosamente , no hay tiquetes disponibles");

alert(" total ruta medellin-miami:   " + cont1 + "\n  total medellin-bogota-roma  " + cont2 + "\n total medellin panama los angeles " + cont3 + "\n total medellin-madrid " + cont4);