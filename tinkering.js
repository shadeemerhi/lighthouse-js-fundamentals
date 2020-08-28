function judgeVegetable (vegetables, metric) {

  let temp = 0;
  let winner = '';

  for (let veggie of vegetables) {
    if (temp < veggie[metric]) {
      winner = veggie.submitter;
      temp = veggie[metric];
    }
  }
  return winner;
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));