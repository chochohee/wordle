const 정답 = "APPLE";

let attempts = 0;
let index = 0;

//a kecode=65 z=90 //
function gameStart() {
  const handleEnterKey = () => {
    //정답확인
  };
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
    const key = event.target.getAttribute("data-key");
    const keybord = document.querySelector(
      `.keybord_key[data-key='${attempts}${index}']`
    );
    const thisBlock = document.querySelector(
      `.bord-block[data-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (!key) return; //key 변수가 아니라면 리턴
    else if (index === 5) return;

    thisBlock.innerText = key;
    index += 1;
    console.log("입력", event);
  };

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("click", handleclick);
}
gameStart();
