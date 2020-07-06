const container = document.querySelector(".container");
const text = document.querySelector("#text");
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2; //3000
const holdTime = totalTime / 5; //1500
function breathAnimation() {
  text.innerHTML = "Breath In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "BreathOut";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
