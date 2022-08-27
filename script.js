function mostrarHora() {
    var date = new Date();
    var horas = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();
    var turno = "AM";

    if (horas == 0) {
        horas = 12;
    }

    if (horas > 12) {
        horas = horas - 12;
        turno = "PM"
    }

    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    var time = horas + ":" + minutos + ":" + segundos + ":" + " " + turno;
    document.getElementById("MeuRelogio").innerText = time;
    document.getElementById("MeuRelogio").textContent = time;


    var currentTime = new Date().getHours();
    if (6 <= currentTime && currentTime < 12) {

        document.body.style.backgroundImage = "url('https://wi.wallpapertip.com/wsimgs/78-786329_google-desktop-backgrounds.jpg')";
        document.body.classList.add("planoFundo1");


    } else if (12 <= currentTime && currentTime < 18) {

        document.body.style.backgroundImage = "url('https://wallpaper.dog/large/20500142.jpg')";
        document.body.classList.add("planoFundo2");

    } else {

        document.body.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg')";
        document.body.classList.add("planoFundo3");


    }

    setTimeout(mostrarHora, 1000);

}

mostrarHora();
