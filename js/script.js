document.getElementById("text").innerHTML =
  "Hola, me presento yo soy “Roby”, un pequeño programa creado por Danny para una chica muy especial, ¿Debes ser July verdad?";
document.getElementById("nextButtom").innerHTML = "Sí";

let messageCount = 0;
function myFunction() {
  if (messageCount > 17) return;
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
  image.src = "scr/dragon-chimuelo-png-4-Transparent-Images.png";
  if (messageCount == 14) image.src = "scr/heart.png";
  setTimeout(() => {
    element.classList.remove("loading");
    element.classList.remove("show");
    messageCount += 1;
    let messageSeleted = "";
    let messageBottonSelected = "";
    switch (messageCount) {
      case 1:
        messageSeleted =
          "Ya me lo imaginaba, Danny es muy cuidadoso en entregar la clave solo a la persona correcta.";
        messageBottonSelected = "¿Enserio?";
        const audio = document.querySelector("audio");
        audio.volume = 0.2;
        audio.play();
        break;
      case 2:
        messageSeleted =
          "Sabes, no había visto a Danny tan feliz hace mucho tiempo, tan emocionado esperando un mensaje de una chica.";
        messageBottonSelected = "Continua";
        break;
      case 3:
        messageSeleted =
          "He pasado con él muy poco tiempo y puede que a veces parezca una persona muy seria u ocupada";
        messageBottonSelected = "Pues sí";
        break;
      case 4:
        messageSeleted =
          "Pero cuando una persona como tú le importa, dejaría todo de lado por hacerla feliz.";
        messageBottonSelected = "Aún no te creo.";
        break;
      case 5:
        messageSeleted =
          "¿Te digo un secreto? pero no se lo digas que yo te conté, si se entera que yo te lo dije, me podría eliminar.";
        messageBottonSelected = "¡Prometo no decir Nada!";
        break;
      case 6:
        messageSeleted =
          "Debiste verlo el día que le confirmaste su primera cita, estaba tan emocionado esperando que llegue el día.";
        messageBottonSelected = "...";
        break;
      case 7:
        messageSeleted =
          "Muy nervioso y con una mirada llena de felicidad,	jaja con decirte que incluso plancho su camisa, ¿¡me lo puedes creer!?";
        messageBottonSelected = "Jaja";
        break;
      case 8:
        messageSeleted =
          "Me confesó que hace mucho tiempo no se sentía tan contento.";
        messageBottonSelected = "...";
        break;
      case 9:
        messageSeleted =
          "Pero me dijo que había algo que se le olvidó preguntarte";
        messageBottonSelected = "¿Qué se le olvidó?";
        break;
      case 10:
        messageSeleted =
          "Aunque habían aclarado las cosas no sabía formalmente que eran ustedes dos.";
        messageBottonSelected = "¿Te dijo algo más?";
        break;
      case 11:
        messageSeleted =
          "Me dijo que buscó la mejor manera para decírtelo, pero no se le ocurría.";
        messageBottonSelected = "¿Entonces?";
        break;
      case 12:
        messageSeleted =
          "Entonces pensó que yo podría ayudarlo preguntándote, ¿te interesa saber? ";
        messageBottonSelected = "¡Sí!";
        break;
      case 13:
        messageSeleted =
          "Entre tantas ideas que tenía en la mente, pensó que las palabras más sencillas y honestas serían suficientes.";
        messageBottonSelected = "...";
        break;
      case 14:
        messageSeleted =
          "'July, sé que estamos pasando uno bonito momento y la verdad quisiera saber si...'";
        messageBottonSelected = "...";
        break;
      case 15:
        messageSeleted = "¿Quieres Ser Mi Novia?";
        messageBottonSelected = "Si Quiero!!!";
        btnNoResponse.classList.remove("d-hide");
        break;
      case 16:
        messageSeleted =
          "July, el propósito para el que fuí creado ha terminado, créeme que Danny estará muy Feliz con la noticia cuando se la cuente, o sabes qué, porque mejor no se lo dices tú.";
        messageBottonSelected = "...";
        break;
      case 17:
        messageSeleted =
          "No importa la hora que sea créeme que él estará muy emocionado de escucharte, inténtalo.";
        messageBottonSelected = "Llamar";
        btnCall.classList.remove("d-hide");
        btnSendMessage.classList.remove("d-hide");
        btnMain.classList.add("d-hide");
        break;
      default:
        messageSeleted = "test 1";
    }
    document.getElementById("text").innerHTML = messageSeleted;
    document.getElementById("nextButtom").innerHTML = messageBottonSelected;
  }, 1100);
}
