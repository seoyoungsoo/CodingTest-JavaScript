// 1620번 나는야 포켓몬 마스터 이다솜

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [n, m] = input().split(' ').map(e => parseInt(e));
const arr = Array.from({length: n}, () => input());

const pokemon = new Map(arr.map((v, i) => [v, i+1]));

const res = [];

for (let i = 0; i < m; i++) {
  const n = input();
  if (isNaN(n)) res.push(pokemon.get(n));
  else res.push(arr[n-1]);
}

console.log(res.join('\n'));