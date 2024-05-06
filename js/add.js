const 정답 = "APPLE";

let attempts = 0;
let index = 0;

//a kecode=65 z=90 //
function gameStart() {
  const handleEnterKey = () => {
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.bord-block[data-index='${attempts}${i}']`
      );
      const 풀이 = block.innerText;
      const 정답_글자 = 정답[i];
      if (풀이 === 정답_글자) {
        block.style.background = "#6AAA64";
      } else if (정답.includes(풀이)) block.style.background = "#C9B458";
      else block.style.background = "white";
    }
  };
  //정답확인
  //키보드를 눌렀을때 이벤트 발생
  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.bord-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };
  //마우스 클릭했을때 이벤트 발생
  const handleclick = (event) => {
    const keyboardKey = event.target.closest(".keyboard_key");
    if (!keyboardKey) return;
    const clickId = keyboardKey.getAttribute("id");
    const key = keyboardKey.getAttribute("data-key");
    const thisBlock = document.querySelector(
      `.bord-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (clickId) return; //key 변수가 아니라면 리턴
    else if (index === 5) return;

    thisBlock.innerText = key;
    index += 1;
  };

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("click", handleclick);
}
gameStart();
