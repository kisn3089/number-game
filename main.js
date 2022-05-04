//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
// 6번의 기회를 다씀녀 게임이 끝난다 (더이상 추측 불사, 버튼이 disabled)
//유저가 1~100 범위 박예 숫자를 입력하면 알려준다, 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려ㄷ준다, 기회를 깎지 않는다.

// impossible hover때 주사위도 돌아가게
// title과 logo 만들기

let random = 0;
let resultValue = document.getElementById('result-content')
let chancesCount = document.getElementById('chance-content')
let userNum = document.getElementById('user-text')
let playBtn = document.getElementById('play')
let resetBtn = document.getElementById('reset')
let already = [];
let chances = 6;
let gameOver = false;




// 랜덤 함수 생성 1~45
const randomNum = () => {
    random = Math.floor((Math.random() *45))+1
    console.log('정답',random);
}

const playGame = () => {
    let userValue = userNum.value
    if(userValue < 1 || userValue > 45) {
        resultValue.textContent = "1~45사이의 숫자를 입력하세요."
        return;
    }
    if(already.includes(userValue)) {
        resultValue.textContent = "이미 입력한 숫자입니다."
        return;
    }
    chances --;
    chancesCount.textContent = `Chances : ${chances}`
    if(userValue < random) {
        resultValue.textContent = "UP!!"
        resultValue.style.color = "red"
    } else if(userValue > random) {
        resultValue.textContent = "DOWN!!"
        resultValue.style.color = "red"
    }  else {
        resultValue.textContent = "올~~~정답ㅋ"
        resultValue.style.color = "#2C73D2"
        gameOver = true;
        playBtn.disabled = true;
        playBtn.style.backgroundColor = "#737309"

    }
    already.push(userValue);
    console.log(already)

    if(chances < 1) {
        gameOver = true;
        resultValue.textContent = "더 연습하고와"
        chancesCount.textContent = "뿌애애앵ㅇ"
        playBtn.disabled = true;
    }
}

const reset = () => {
    userNum.value ="";
    randomNum();
    chances = 6;
    resultValue.textContent = "Reseted"
    resultValue.style.color = "#2C73D2"
    already.length = 0;
    chancesCount.textContent = `Chances : ${chances}`
    playBtn.disabled = false;
    playBtn.style.backgroundColor = "yellow"


}
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }
}

userNum.addEventListener("focus", () => userNum.value = "")
resetBtn.addEventListener("click", reset)
playBtn.addEventListener("click", playGame)
randomNum();