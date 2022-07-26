const adviceIdElement = document.querySelector('.advice-id');
const adviceTextElement = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-button');

const getRandomAdvice = () => {
  return new Promise(resolve => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => resolve(data.slip));
  });
}

const showAdvice = (adviceApiResponse) => {
  adviceIdElement.innerText = adviceApiResponse.id;
  adviceTextElement.innerText = `"${adviceApiResponse.advice}"`;
}

const getAndShowRandomAdvice = () => {
  getRandomAdvice()
    .then(showAdvice);
}

diceButton.onclick = () => {
  getAndShowRandomAdvice();
}

getAndShowRandomAdvice();