import fs from 'fs';

// L'elfe veut savoir dans quels GAMES,
// il SERAI possible d' avoir
// SEULEMENT MAX 12 red cubes OU MAX 13 green cubes OU 14 blue cubes

function partOne(file) {

  const games = fs.readFileSync(file, 'utf-8').trim().split("\n");
  let sum = 0;
  // J'itere sur les game
  games.map((elem) => {
    // variable pour check si les games sont possible ou pas
    let flag = true;
    // je separe en deux elements d' array game et sets
    let [game, sets] = elem.split(': ');
    // j'itere les sets et je les splits avec un pointvirgule
    sets.split('; ').map((set) => {
      // on va separer d' une virgule les set de chaque game
      const elems = set.split(', ');
      // On va faire une boucle sur les pour recuperer le nombre et la couleur des cubes
      for (let i = 0; i < elems.length; i++) {
        let [number, color] = elems[i].split(' ');
        // Check si la game est possible
        if ((color === 'red' && number > 12) ||
           (color === 'green' && number > 13) ||
           (color === 'blue' && number > 14)
           ) {
            flag = false;
           }
      } 
    });
    // On additionne les Game ID si la game est possible
    if (flag) return sum += +(game.replace("Game ", ""));
  });
  // On retourne le resultat final
  return sum;
}

console.log(partOne('./input.txt'));