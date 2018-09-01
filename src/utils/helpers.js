
export const getSumObject = () => {
	const randomList = createRandomNumbers();

	//total up the first 4 elements
	const sum = randomList.slice(0, 4).reduce((acc, cur) => acc + cur, 0);

	return {
		sum,
		numbers: shuffle(randomList)
	};
};

//create an array of 6 random integers
const createRandomNumbers = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 10 + 1));

//Fisher-Yates
//credit to https://bost.ocks.org/mike/shuffle/ for this implementation
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}