const deg=6;

const horas= document.querySelector('.hora');
const minutos= document.querySelector('.minuto');
const segundos= document.querySelector('.segundo');


setInterval(()=> {
    let tiempo = new Date();
    let hr=tiempo.getHours() * 30;
    let min=tiempo.getMinutes() * deg;
    let seg=tiempo.getSeconds() * deg;
    

    horas.style.transform= `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform= `rotate(${min}deg)`;
    segundos.style.transform= `rotate(${seg}deg)`;
    
})

function calcularTiempo(){

    let tiempo= new Date();

    let hora =tiempo.getHours();
    let minuto=tiempo.getMinutes();
    let segundo=tiempo.getSeconds(); 
    let ampm = "AM";

    // Formato de 12 horas
    if (hora >= 12) {
        ampm = "PM";
    }

    if (hora > 12) {
        hora -= 12;
    }

    hora= hora < 10 ? "0" +hora : hora;
    minuto= minuto < 10 ? "0" +minuto : minuto;
    segundo= segundo < 10 ? "0" + segundo: segundo;
    let relojdigital=document.querySelector(".reloj2")
    let pantallaReloj= "   "+ hora +":"+ minuto + ":" + segundo +"  "+ ampm +"   ";
    
    relojdigital.innerHTML=pantallaReloj;

}
setInterval(calcularTiempo, 1000);