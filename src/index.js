import { generarQR } from "./utils/generador-qr.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();


const SSID      = prompt('SSID: ');
const sPassword = prompt('Pass: ');


const aCifrados = ["WPA", "WPA2", "WEP"]
const aTipos = ["png", "svg"]

generarQR(SSID, aCifrados[0], sPassword, aTipos[0])