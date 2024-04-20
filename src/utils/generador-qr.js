import qr from 'qr-image';
import fs from 'fs';
import moment from 'moment';

export const generarQR = (SSID, sCifrado, sPassword, sTipo) => {
    const sAhora = moment().format("YYYYMMDD_hhmmss")
    const stringQR = `WIFI:S:${SSID};T:${sCifrado};P:"${sPassword}";;`;

    const dirDocumento = `./src/documents/`

    if (!fs.existsSync(dirDocumento)){
        fs.mkdirSync(dirDocumento);
    }

    const sRutaImg = `${dirDocumento + sAhora }_qr.${sTipo}`

    qr.image(stringQR, {
        type: sTipo,
        size : 15
    })
    .pipe(fs.createWriteStream(sRutaImg));

    console.log(`\n📄 ${sRutaImg}`);
    console.log(`QR Generado.`);
}

