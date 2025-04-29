function calculate() {
  let input = document.getElementById('mathInput').value;
  let outputDiv = document.getElementById('output');
  let historyDiv = document.getElementById('history');
  try {
      let result = eval(input);
      outputDiv.innerHTML = `Result: ${result}`;
      let historyItem = document.createElement('div');
      historyItem.classList.add('history-item');
      historyItem.innerText = `${input} = ${result}`;
      historyDiv.appendChild(historyItem);
  } catch (error) {
      outputDiv.innerHTML = "Invalid expression";
  }
}

function clearHistory() {
  document.getElementById('history').innerHTML = '<strong>Calculation History:</strong>';
}