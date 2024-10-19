let s;
//let a = +prompt("Щоб дізнатись прогноз погоди, введіть день тижня:");
let a = 7;
switch (a) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    s = "будні";
    break;
  case 6:
  case 7:
    s = "вихідний";
    break;
  default:
    s = "Вкажіть правильно день тижня";
}
console.log(s);
