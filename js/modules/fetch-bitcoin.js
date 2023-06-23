export default function initFecthBitcoin(url, target){
  fetch(url)
  .then(r => r.json())
  .then(bitcoin => {
    const preco = document.querySelector(target);
    preco.innerText = (100/bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro))
  });
}

