
// ---------------------------------------------------------------- LIGHT ----------------------------------------------
const buttonCite = document.querySelector('#buttonCite');
const citeOutput = document.querySelector('#cite');



let cites = [
  "Yo nunca me he fugado de clase.",
  "Yo nunca he fingido estar malo para no ir a clase.",
  "Yo nunca he conducido antes de tener carnet.",
  "Yo nunca me he peleado con alguien.",
  "Yo nunca me he emborrachado hasta vomitar.",
  "Yo nunca me he inventado una excusa porque no tenía ganas de salir.",
  "Yo nunca he comido comida chatarra.",
  "Yo nunca he fastidiado las vacaciones a alguien.",
  "Yo nunca lloré ni supliqué para librarme de una multa o de un castigo.",
  "Yo nunca me he tropezado por estar mirando el móvil.",
  "Yo nunca me he cortado el pelo y luego me he arrepentido.",
  "Yo nunca me enamoré a primera vista.",
  "Yo nunca le dije a alguien 'te quiero' sin querer.",
  "Yo nunca he mentido jugando a 'Yo nunca'.",
  "Yo nunca he estado despierto durante dos días seguidos.",
  "Yo nunca me he teñido el pelo de un color llamativo o fantasía.",
  "Yo nunca he estado en un país de Asia (se puede cambiar el continente).",
  "Yo nunca he hecho puenting.",
  "Yo nunca he aparecido en un vídeo de YouTube.",
  "Yo nunca he perdido el conocimiento.",
  "Yo nunca he hecho que alguien tenga que ir al hospital.",
  "Yo nunca he perdido el trabajo por haber salido de fiesta y bebido mucho la noche anterior.",
  "Yo nunca he trabajado borracho.",
  "Yo nunca he dicho que me gustaba mucho un regalo y luego lo he devuelto.",
  "Yo nunca he tenido una experiencia paranormal.",
  "Yo nunca he estado con un extraño.",
  "Yo nunca he consumido drogas.",
  "Yo nunca he hecho o recibido un baile erótico.",
  "Yo nunca envié una mensaje fuerte o descarado a la persona equivocada.",
  "Yo nunca he estado esposado (por cualquier motivo).",
  "Yo nunca he olido mi propia ropa interior para ver si está limpia o sucia.",
  "Yo nunca he robado nada en una tienda.",
  "Yo nunca he jugado a Stranger Things con las luces de casa o las del árbol de Navidad.",
  "Yo nunca he hecho un spoiler de Juego de Tronos, sin querer o a propósito.",
  "Yo nunca he borrado una foto de una red social por no gustarme cómo salgo.",
  "Yo nunca he mentido a mis amigos.",
  "Yo nunca he entrado a una fiesta sin estar invitado.",
  "Yo nunca he recibido una bofetada en público.",
  "Yo nunca pensé que soy la persona más bella de este grupo.",
  "Yo nunca he escuchado reggaetón en sesión privada en Spotify para que nadie me descurbiera.",
  "Yo nunca he tenido una época vegetariana o vegana.",
  'Yo nunca pensé que un personaje de dibujos animados fuera atractivo.',
  'Yo nunca he estado esposado por la policía.',
  'Yo nunca he tenido diarrea en la casa de un amigo.',
  'Yo nunca me he vestido con ropa del sexo opuesto.',
  'Yo nunca he culpado a un amigo por algo que hice.',
  'Yo nunca he jugado a la Ouija.',
  'Yo nunca he bebido antes de cumplir 18.',
  'Yo nunca me he enamorado de un profesor.',
  'Yo nunca he mentido sobre cuánto mido para ligar.',
  'Yo nunca he pasado más de una semana sin ducharme.',
  'Yo nunca he creado una cuenta falsa en las redes sociales.',
  'Yo nunca he despertado en un lugar extraño porque iba muy borracho.',
  'Yo nunca he perdido la parte de abajo de mi traje de baño mientras estaba en la playa.',
  'Yo nunca he ido en pijama y zapatillas por la calle.',
  'Yo nunca he perdido el conocimiento.',
  'Yo nunca he hecho que alguien tenga que ir al hospital.',
  'Yo nunca me he hecho un piercing en una zona innombrable.',
  'Yo nunca he quedado muy en ridículo al intentar ligar con alguien.',
  'Yo nunca he recibido una bofetada en público.',
  'Yo nunca he deseado la muerte a alguien que esté hoy aquí.',
  'Yo nunca he robado dinero.',
  'Yo nunca he exagerado mis logros para intentar ligar.',
  'Yo nunca he dado un nombre falso.',
  'Yo nunca he dejado plantado a alguien en una cita.',
  'Yo nunca he devuelto algo después de habérmelo puesto.',
  'Yo nunca he soltado sin querer el teléfono en el baño.',
  'Yo nunca he llorado de mentira para conseguir algo.',
  'Yo nunca he gastado más de 200 euros en una noche de fiesta.',
  'Yo nunca he enviado un mensaje a un ex sin venir a cuento.',
  'Yo nunca he salido corriendo haciendo un simpa.',
  'Yo nunca he buscado mi propio nombre en Google.',
  'Yo nunca he editado mis selfies.',
  'Yo nunca me han negado la entrada a un club.',
  'Yo nunca he mandado mensajes privados a un famoso.',
  'Yo nunca he mentido jugando a "Yo nunca".',
  'Yo nunca me han puesto una multa por exceso de velocidad.',
  'Yo nunca he hecho "ghosting" a alguien.',
  'Yo nunca he enviado un mensaje a un ex sin venir a cuento.',
  'Yo nunca he usado el cepillo de dientes de otra persona.',
  'Yo nunca he orinado en la ducha.',
  'Yo nunca he salido con el ex de un amiga.',
  'Yo nunca me han asaltado.',
  'Yo nunca he llorado por una película.',
  'Yo nunca me he roto un hueso.',
  'Yo nunca he mentido para salir de la discoteca antes de tiempo.',
  'Yo nunca he cogido manía a una amiga o a otra persona.',
  'Yo nunca he besado a un famoso.',
  'Yo nunca he comido las sobras de otra mesa en un restaurante.',
  'Yo nunca he copiado en un examen.',
  'Yo nunca he fingido ser otra persona.',
  'Yo nunca he ignorado a un conocido en público.',
  'Yo nunca he estropeado una prenda de vestir que me prestó una amiga.',
  'Yo nunca he hecho autostop.',
  'Yo nunca me he colado en un festival o club.',
  'Yo nunca he infringido la ley.',
  'Yo nunca he mentido a mi jefe.',
  'Yo nunca me he colado en los DMs de alguien.',
  'Yo nunca me he hecho un tatuaje del que me haya arrepentido.',
  'Yo nunca he dejado de llevar ropa interior en una noche de fiesta.',
  'Yo nunca he mirado el teléfono de mi pareja.',
  'Yo nunca he usado la cuenta de Netflix de otra persona.',
  'Yo nunca me he apuntado al gimnasio y he abandonado.',
  'Yo nunca me he emborrachado hasta perder el conocimiento.',
  'Yo nunca he consumido alucinógenos.'
];


let lastNumber = 0;

function randcite() {
  let rnd = Math.floor(Math.random() * cites.length);
  if (rnd != lastNumber) {
    citeOutput.innerText = `"${cites[rnd]}"`;
    lastNumber = rnd;
  } else {
    randcite(); // Recursion
  }
} // End rand function

buttonCite.addEventListener('click', randcite); // Call the function, in events you can't do this -> rand() , parenthesis no!
