const textElement = document.getElementById('text');

const btnElement = document.getElementById('btn');

btnElement.addEventListener('click' , () =>  {
  
  textElement.textContent = 'ボタンをクリックしました';
});