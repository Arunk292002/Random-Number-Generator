function generateRandomNumber(){
    const min=parseInt(document.getElementById('min').value);
    const max=parseInt(document.getElementById('max').value);
    const random=Math.floor(Math.random()*(max-min))+min;
    document.getElementById('result').textContent=`Random Number=${random}`;
}
document.getElementById('btn').addEventListener("click",generateRandomNumber);