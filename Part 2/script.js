function años(){
    var nacimiento = new Date(22,05,2000);
    var futura = new Date(22,05,2050);
    var x = Date.parse(nacimiento);
    var y = Date.parse(futura);
    var edad = (y-x)/31536000000;
    console.log(edad);
}
años();