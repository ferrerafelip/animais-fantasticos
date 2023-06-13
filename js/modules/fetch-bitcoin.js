export default function initFecthBitcoin(){
  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(bitcoin => {
    const preco = document.querySelector('.btc-preco');
    preco.innerText = (100/bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro))
  });
}

