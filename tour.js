let a = prompt("Введіть країну");

let s;
let price = 0;
let hot = false;
// hot = confirm("Тур гарячий?");
switch (a) {
  case "Іспанія":
    price = 1000;
    s = `Ціна туру в Іспанію: $${price}`;
    break;
  case "Англія":
    s = "У вівторок: жарко, +25 ";
    break;
  case "Італія":
    s = "У середу: дощ, +17 ";
    break;
  case "Франція":
    s = "У четвер: прохолодно, +10 ";
    break;

  default:
    s = "Вкажіть правильно країну";
}
alert(s);
