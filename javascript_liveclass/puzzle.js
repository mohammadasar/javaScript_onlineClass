// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   // Example array of objects
//   let words = [
//     { word: "apple", category: "fruit" },
//     { word: "banana", category: "fruit" },
//     { word: "carrot", category: "vegetable" },
//     { word: "orange", category: "fruit" }
//   ];
  
//   // Shuffle the array
//   let shuffledWords = shuffleArray(words);
  
//   // Output shuffled array
//   console.log(shuffledWords);
// ==========================================================================================

// Function to generate a crossword grid
function generateCrossword(words, gridSize) {
  // Sort words by length in descending order
  words.sort((a, b) => b.length - a.length);

  // Create an empty grid
  const grid = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => '.'));

  // Function to check if a word fits at a given position
  function canPlaceWord(word, row, col, direction) {
      // Check if word fits within grid bounds
      if (direction === 'across' && col + word.length > gridSize) return false;
      if (direction === 'down' && row + word.length > gridSize) return false;

      // Check for intersections with existing letters
      for (let i = 0; i < word.length; i++) {
          const r = direction === 'across' ? row : row + i;
          const c = direction === 'across' ? col + i : col;
          if (grid[r][c] !== '.' && grid[r][c] !== word[i]) return false;
      }

      return true;
  }

  // Function to place a word in the grid
  function placeWord(word, row, col, direction) {
      for (let i = 0; i < word.length; i++) {
          const r = direction === 'across' ? row : row + i;
          const c = direction === 'across' ? col + i : col;
          grid[r][c] = word[i];
      }
  }

  // Function to find a valid position for a word
  function findValidPosition(word) {
      for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
              if (canPlaceWord(word, row, col, 'across')) return { row, col, direction: 'across' };
              if (canPlaceWord(word, row, col, 'down')) return { row, col, direction: 'down' };
          }
      }
      return null; // No valid position found
  }

  // Place each word in the grid
  for (const word of words) {
      const position = findValidPosition(word);
      if (position) placeWord(word, position.row, position.col, position.direction);
      else return null; // Unable to place word
  }

  return grid;
}

// Example usage:
const words = ['HELLO', 'WORLD', 'PYTHON', 'JAVASCRIPT', 'CROSSWORD'];
const gridSize = 10;
const crosswordGrid = generateCrossword(words, gridSize);

if (crosswordGrid) {
  for (const row of crosswordGrid) {
      console.log(row.join(' '));
  }
} else {
  console.log('Unable to generate crossword with given words.');
}

  