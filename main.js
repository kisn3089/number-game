//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다씀녀 게임이 끝난다 (더이상 추측 불사, 버튼이 disabled)
//유저가 1~100 범위 박예 숫자를 입력하면 알려준다, 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려ㄷ준다, 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById('play_button');
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("result_area");
let resetArea = document.getElementById("reset");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances_area");
let history = [];

playButton.addEventListener("click", play)
resetArea.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답: ", computerNum);
}

function play() {
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1~100의 숫자를 입력하세요."
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }
    chances --;
    chancesArea.textContent = `남은기회: ${chances}번`
    if(userValue < computerNum) {
        resultArea.textContent = "UP!!"
    }   else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!"
    }   else {
        resultArea.textContent = "딩동댕"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances < 1){
        gameOver = true;
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "리셋 되었습니다."
    chances = 5;
    chancesArea.textContent = `남은기회: ${chances}번`
    playButton.disabled = false;
    history.length = 0;
}


pickRandomNum();