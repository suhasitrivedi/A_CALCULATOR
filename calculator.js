let memory = 0;

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function memoryAdd() {
  const result = parseFloat(document.getElementById('result').value);
  if (!isNaN(result)) {
    memory += result;
  }
}

function memorySubtract() {
  const result = parseFloat(document.getElementById('result').value);
  if (!isNaN(result)) {
    memory -= result;
  }
}

function memoryRecall() {
  document.getElementById('result').value = memory;
}

function memoryClear() {
  memory = 0;
}

function deleteLast() {
    let input = document.getElementById('result').value;
    document.getElementById('result').value = input.substring(0, input.length - 1);
  }
  

function calculateResult() {
  try {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
