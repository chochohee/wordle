const 정답 = "APPLE";

let attempts = 0;
let index = 0;
let timer;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "GAME OVER";
    div.style =
      "display:flex; justify-content:center; align-items:center;position:absolute; top:40vh; left:47vw; background-color:black; color:white; whith:100px; height:100px;";
    document.body.appendChild(div);
  };
  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1;
    index = 0;
  };
  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
    clearInterval(timer);
  };
  const handleEnterKey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const thisblock = document.querySelector(
        `.bord-block[data-index='${attempts}${i}']`
      );
      const 풀이 = thisblock.innerText;
      const 정답_글자 = 정답[i];
      if (풀이 === 정답_글자) {
        맞은_갯수 += 1;
        thisblock.style.background = "#6AAA64";
      } else if (정답.includes(풀이)) thisblock.style.background = "#C9B458";
      else thisblock.style.background = "#787C7E";
      thisblock.style.color = "white";
    }

    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };

  const handleBackspace = () => {
    if (index > 0) {
      const freeBlock = document.querySelector(
        `.bord-block[data-index='${attempts}${index - 1}']`
      );
      freeBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.bord-block[data-index='${attempts}${index}']`
    );
    console.log(event.key);

    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  //마우스 클릭했을때 이벤트 발생
  const handleclick = (event) => {
    // const keyboardKey = event.target.closest(".keyboard_key");
    // console.log(keyboardKey);
    const key2 = event.target.getAttribute("data-key");
    console.log("$$$" + key2);
    const thisBlock = document.querySelector(
      `.bord-block[data-index='${attempts}${index}']`
    );
    // key가 null이 아닐 때 동작
    if (key2 !== null) {
      if (key2 === "Backspace") handleBackspace();
      else if (index === 5) {
        if (event.key === "Enter") handleEnterKey();
        else return;
      } else thisBlock.innerText = key2;
      index += 1;
      console.log(event);
    }
  };

  const startTimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const time = document.querySelector(".time");
      time.innerText = `${분}:${초}`;
    }

    timer = setInterval(setTime, 1000);
  };
  startTimer();
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("click", handleclick);
}

appStart();
