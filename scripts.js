const conatiner = document.getElementById("container");
const colors = ['#b3c561', '#c56161', '#9561c5', '#61a9c5', '#86c561']
const SQUARES_NUM = 900;

for (let i = 0; i < SQUARES_NUM; i++) {
      const square = document.createElement('div');
      square.classList.add("square");

      square.addEventListener("mouseover", e => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            square.style.backgroundColor = color;
            square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
      })
      square.addEventListener("mouseleave", e => {
            square.style.backgroundColor = "#333";
            square.style.boxShadow = '0 0 2px #000'
      })

      conatiner.append(square)
}

