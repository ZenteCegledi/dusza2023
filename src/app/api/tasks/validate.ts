export function validateTask(task: Task): boolean {
  if (task.words.length !== 4) {
    return false;
  }

  // Check if last word has at least 3 syllables
  // Hungarian characters are supported
  const lastWord = task.words[task.words.length - 1];
  const vowels = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
  const consonants = ["b", "c", "cs", "d", "dz", "dzs", "f", "g", "gy", "h", "j", "k", "l", "ly", "m", "n", "ny", "p", "q", "r", "s", "sz", "t", "ty", "v", "w", "x", "y", "z", "zs"];
  let syllableCount = 0;
  let lastChar = "";
  for (const char of lastWord) {
    if (vowels.includes(char)) {
      if (!vowels.includes(lastChar)) {
        syllableCount++;
      }
    } else if (consonants.includes(char)) {
      if (!consonants.includes(lastChar)) {
        syllableCount++;
      }
    } else {
      return false;
    }

    lastChar = char;
  }

  if (syllableCount < 3) {
    return false;
  }

  if (task.grade < 5 || task.grade > 8) {
    return false;
  }

  return true;
}