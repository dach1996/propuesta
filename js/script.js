document.getElementById("text").innerHTML =
  "Hola nuevamente, no se si te acuerdas de mí soy: “Robby”, Me enteré de todo.";
document.getElementById("nextButtom").innerHTML = "¿Cómo te enteraste?";

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
  image.src = "scr/dragon-chimuelo-png-4-Transparent-Images.png";
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
          "Es una larga historia, solo sé que pasaron muchas cosas muy lindas y otras malas.";
        messageBottonSelected = "¿Qué te dijo?";
        const audio = document.querySelector("audio");
        audio.volume = 0.8;
        audio.play();
        break;
      case 2:
        messageSeleted =
          "Me dijo que desde el día que leíste esta carta, comenzó la historia más bonita que él habría tenido.";
        messageBottonSelected = "¿Cuáles fueron esos momentos?";
        break;
      case 3:
        messageSeleted =
          "Me contó de su primer viaje y lo emocionado que estaba por poder verte, no le importó viajar por horas solo por verte.";
        messageBottonSelected = "Continuar";
        break;
      case 4:
        messageSeleted =
          "Me contó de su primera noche juntos, y de lo bonito que sintió al tenerte a su lado.";
        messageBottonSelected = "Continuar";
        break;
      case 5:
        messageSeleted =
          "Me contó de su primera navidad juntos, y el deseo que escribió en el papelito.";
        messageBottonSelected = "¿Cuál fue ese deseo?";
        break;
      case 6:
        messageSeleted =
          "Él pidió algo que se cumplió";
        messageBottonSelected = "¿Qué?";
        break;
      case 7:
        messageSeleted =
          "Pidió que tú fueras feliz, desde lo más bonito de su corazón, sin importar que no sea con él.";
        messageBottonSelected = "...";
        break;
      case 8:
        messageSeleted =
          "Pero me comentó que en enero pasó algo que los dejó muy dañados a ambos.";
        messageBottonSelected = "Lo sé";
        break;
      case 9:
        messageSeleted =
          "Me confesó que por más que trató, siempre sintió que él no fue suficiente";
        messageBottonSelected = "...";
        break;
      case 10:
        messageSeleted =
          "Sintió que él tuvo la culpa de todo lo que pasó en enero, él sintió que lo que pasó fue porque no te dio lo que tu merecías.";
        messageBottonSelected = "Continuar";
        break;
      case 11:
        messageSeleted =
          "No te culpes, tuviste tus razones, y él no supo entender.";
        messageBottonSelected = "¿Qué pasó luego?";
        break;
      case 12:
        messageSeleted =
          "Me contó que aún así siguieron intentándolo, porque pensaron que el amor que sentían era suficiente para sanar.";
        messageBottonSelected = "¿Qué más te dijo?";
        break;
      case 13:
        messageSeleted =
          "Sus ojitos se llenaron de lágrimas al decirme que se mandaban una notita diaria recórranse cuanto se amaban";
        messageBottonSelected = "Sí, lo hacíamos...";
        break;
      case 14:
        messageSeleted =
          "Me dijo que no había hecho eso con nadie y que lo hiciste sentir el hombre más especial, pero de igual manera se acabó...";
        messageBottonSelected = "Sí, dejamos de hacerlo";
        break;
      case 15:
        messageSeleted =
          "Me contó que quería hacerte algo que no te habían hecho antes por tu cumpleaños para hacerte sentir especial";
        messageBottonSelected = "Sí";
        break;
      case 16:
        messageSeleted =
          "Y que se sintió mal porque lo único que logro empeorar la situación";
        messageBottonSelected = "...";
        break;
      case 17:
        messageSeleted =
          "Luego de eso las cosas se terminaron...";
        messageBottonSelected = "Sí";
        break;
      case 18:
        messageSeleted =
          "¿Sabes? él es de las personas que cuando se termina se va sin mirar atrás, y por alguna razón a ti te intentó buscar";
        messageBottonSelected = "Me lo había dicho";
        break;
      case 19:
        messageSeleted =
          "Me dijo que prefería romper su orgullo y llamarte";
        messageBottonSelected = "Si me llamó";
        break;
      case 20:
        messageSeleted =
          "¿Sabes? Lo vi muchas madrugadas esperando una llamada o un mensaje porque no quería irse";
        messageBottonSelected = "...";
        break;
      case 21:
        messageSeleted =
          "No te culpes quizá no te dijo las palabras adecuadas cuando te llamó";
        messageBottonSelected = "Entiendo";
        break;
      case 22:
        messageSeleted =
        "No te dejes guiar por su actitud, lo vi muchas noches llorar pensando en tí, intentando sacar todas sus inseguridades";
        messageBottonSelected = "¿Enserio?";
        break;
      case 23:
        messageSeleted =  "Nunca lo había visto tan enamorado... pero...";
        messageBottonSelected = "¿Pero qué?";
        break;
      case 24:
        messageSeleted = "Tampoco lo había visto tan roto...";
        messageBottonSelected = "...";
        break;
      case 25:
          messageSeleted = "Querida July, me despido de tí, Danny me había creado con un único propósito el cuál ha terminado";
          messageBottonSelected = "¿Por qué me dices esto?";
          break;
      case 26:
          messageSeleted = "Danny necesita perdonarse por todo lo que pasó, necesita sanar y reconstruirse";
          messageBottonSelected = "Pero...";
          break;
      case 27:
        messageSeleted = "Discúlpalo porque no cumplió todas las promesas que te hizo, lo intentó";
        messageBottonSelected = "Pero...";
        break;
      case 28:
          messageSeleted = "Te Amo Gatito, Gracias por compartir conmigo esta bonita historia, espero en otro punto de la vida volver a encontrarte y terminar la historia que empezamos.";
          messageBottonSelected = "Fin";
          break;
      default:
        messageSeleted = "...";
    }
    document.getElementById("text").innerHTML = messageSeleted;
    document.getElementById("nextButtom").innerHTML = messageBottonSelected;
  }, 1100);
}
