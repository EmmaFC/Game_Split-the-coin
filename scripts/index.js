let coinHeadProbability = Math.random ();

let headImage = document.createElement ("img");
    headImage.style.width = "200px";
    headImage.style.marginBottom = "40px";
    headImage.src="/assets/img/coin-heads.png";
    document.getElementById("result").appendChild (headImage);

let btn = document.getElementById ("flip_button");

btn.onclick = function flipCoin (){

  if (coinHeadProbability <=0.5){
 
    document.getElementById("result").innerHTML = `<div id="words">Heads</div>`;
    document.getElementById("result").appendChild (headImage);
    coinHeadProbability = Math.random ();
  }
  
  else { 
  
    document.getElementById("result").innerHTML = `<div id="words">Tails</div>`;
    let tailImage = document.createElement ("img");
    tailImage.src="/assets/img/coin-tails.png";
    tailImage.style.width = "200px";
    tailImage.style.marginBottom = "40px";
    document.getElementById("result").appendChild (tailImage);
    coinHeadProbability = Math.random ();
  }

}