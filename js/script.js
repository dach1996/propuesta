document.getElementById("text").innerHTML =
  "Hola July, espero que te encuentres bien, ¿sabes qué día es hoy?";
document.getElementById("nextButtom").innerHTML = "No, ¿que día es hoy?";

let messageCount = 0;
function myFunction() {
  if (messageCount > 28) return;
  let element = document.getElementById("spin");
  element.classList.add("loading");
  element.classList.add("show");
  let btnCall = document.getElementById("call");
  if (!btnCall.classList.contains("d-hide")) btnCall.classList.add("d-hide");
  let btnSendMessage = document.getElementById("sendMessage");
  if (!btnSendMessage.classList.contains("d-hide"))
    btnSendMessage.classList.add("d-hide");
  let btnNoResponse = document.getElementById("btnNoResponse");
  if (!btnNoResponse.classList.contains("d-hide"))
    btnNoResponse.classList.add("d-hide");
  let btnMain = document.getElementById("nextButtom");
  if (!btnMain.classList.contains("d-hide")) btnMain.classList.remove("d-hide");
  let image = document.getElementById("imageSelected");
  image.src = "scr/abeja.png";
  setTimeout(() => {
    element.classList.remove("loading");
    element.classList.remove("show");
    messageCount += 1;
    let messageSeleted = "";
    let messageBottonSelected = "";
    if (messageCount == 29) image.src = "scr/IMG-20230120-WA0007.jpg";
    switch (messageCount) {
      case 1:
        messageSeleted =
          "Hoy es 21 de marzo, un día normal para unas personas y muy especial para ciertas chicas, ¿Sabes por qué?";
        messageBottonSelected = "No";
        const audio = document.querySelector("audio");
        audio.volume = 0.8;
        audio.play();
        break;
      case 2:
        messageSeleted =
          "El día de hoy marca el inicio de la primavera y es cuando las flores más bonitas hacen su aparición.";
        messageBottonSelected = "¿Enserio?";
        break;
      case 3:
        messageSeleted =
          "Perdón por volver a escribir luego de lo que pasó, pero recordé la bonita sonrisa que te causaba esta fecha.";
        messageBottonSelected = "Tranquilo";
        break;
      case 4:
        messageSeleted =
          "Aunque no lo creas la sensación más bonita para un chico es hacer feliz a la chica que le gusta";
        messageBottonSelected = "No lo sabía";
        break;
      case 5:
        messageSeleted =
          "No sé si el día de hoy recibiste o no las flores amarillas, pero en caso de no haberlas recibido no te preocupes.";
        messageBottonSelected = "¿Por qué?";
        break;
      case 6:
        messageSeleted =
          "Porque tengo una pequeña sorpresa para ti";
        messageBottonSelected = "¿Cuál es?";
        break;
      case 7:
        messageSeleted =
          "Sé lo importante que es esta fecha para ti y la sensación tan bonita que sientes al recibir tus florecitas amarillas.";
        messageBottonSelected = "Sí, me gustan mucho";
        break;
      case 8:
        messageSeleted =
          "Si quieres tu sopresa debes ir a reclamar tu sorpresa en la garita con el guardia.";
        messageBottonSelected = "Ok voy...";
        break;
      case 9:
        messageSeleted =
          "Espero poderte haber alegrado el día";
        messageBottonSelected = "Gracias";
        break;
      default:
        messageSeleted = "...";
    }
    document.getElementById("text").innerHTML = messageSeleted;
    document.getElementById("nextButtom").innerHTML = messageBottonSelected;
  }, 1100);
}
