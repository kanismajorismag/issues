const gridSize = 5;

const puzzleGrid = [
  ['1', '', '', '#', '#'],
  ['#', '#', '2', '#', '#'],
  ['3', '', '', '', '4'],
  ['#', '#', '#', '#', '#'],
  ['5', '', '', '#', '#']
];

const answers = [
  ['C', 'A', 'T', '', ''],
  ['', '', 'R', '', ''],
  ['D', 'O', 'G', 'S', 'P'],
  ['', '', '', '', ''],
  ['P', 'I', 'G', '', '']
];

const clues = {
  across: {
    1: "Animal that says meow",
    3: "Common pets",
    5: "Farm animal"
  },
  down: {
    1: "Opposite of dog",
    2: "Rodent with a bad rep",
    4: "Fast animal"
  }
};

const crossword = document.getElementById('crossword');

for (let r = 0; r < gridSize; r++) {
  for (let c = 0; c < gridSize; c++) {
    const val = puzzleGrid[r][c];
    const cell = document.createElement('div');
    cell.className = 'cell';

    if (val === '#') {
      cell.classList.add('block');
    } else {
      const input = document.createElement('input');
      input.maxLength = 1;
      input.dataset.row = r;
      input.dataset.col = c;
      cell.appendChild(input);

      if (val !== '') {
        const number = document.createElement('div');
        number.className = 'cell-number';
        number.textContent = val;
        cell.appendChild(number);
      }
    }

    crossword.appendChild(cell);
  }
}

const acrossList = document.getElementById('across-clues');
const downList = document.getElementById('down-clues');

for (let [num, clue] of Object.entries(clues.across)) {
  const li = document.createElement('li');
  li.textContent = `${num}. ${clue}`;
  acrossList.appendChild(li);
}

for (let [num, clue] of Object.entries(clues.down)) {
  const li = document.createElement('li');
  li.textContent = `${num}. ${clue}`;
  downList.appendChild(li);
}

function checkAnswers() {
  const inputs = document.querySelectorAll('#crossword input');
  inputs.forEach(input => {
    const row = input.dataset.row;
    const col = input.dataset.col;
    const correct = answers[row][col];
    if (input.value.toUpperCase() === correct) {
      input.style.background = '#cfc';
    } else {
      input.style.background = '#fcc';
    }
  });
}
