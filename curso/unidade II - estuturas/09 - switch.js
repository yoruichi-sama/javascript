const data = new Date();

// pega inteiro dia da semana -> [0 => domingo]
const diaSemana = data.getDay();

let diaSemanaTexto;

if (diaSemama === 0) {
  diaSemanaTexto = "Dom";
} else if (diaSemama === 1) {
  diaSemanaTexto = "Seg";
} else if (diaSemama === 2) {
  diaSemanaTexto = "Ter";
} else if (diaSemama === 3) {
  diaSemanaTexto = "Qua";
} else if (diaSemama === 4) {
  diaSemanaTexto = "Qui";
} else if (diaSemama === 5) {
  diaSemanaTexto = "Sex";
} else if (diaSemama === 6) {
  diaSemanaTexto = "Sab";
}

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Dom";
    break;

  case 1:
    diaSemanaTexto = "Seg";
    break;

  case 2:
    diaSemanaTexto = "Ter";
    break;

  case 3:
    diaSemanaTexto = "Qua";
    break;

  case 4:
    diaSemanaTexto = "Qui";
    break;

  case 5:
    diaSemanaTexto = "Sex";
    break;

  case 6:
    diaSemanaTexto = "Sab";
    break;

  default:
    break;
}
