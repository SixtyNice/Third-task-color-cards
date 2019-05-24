'use strict'

//Проосто функция для сбора и вызова всех функций (тофтология I know :) ) 
function setup() {
    reset();
    shuffleColor();
    addColor();
    Game();

}
const playBoard = document.querySelector('.play-board');
const colors = ["red", "green", "purple", "blue", "gray", "yellow", "orange", "aqua", "red", "green", "purple", "blue", "gray", "yellow", "orange", "aqua"];

document.querySelector('.start-btn').addEventListener('click', setup);
//Рисуем клетки
function draw() {
    for (let i = 0; i < 16; i++) {
        let card = document.createElement("div");
        card.className = "card";
        playBoard.appendChild(card);
    }
}
draw();

//перемешиваем массив цветов 
function shuffleColor() {
    colors.sort(() => (Math.random() - 0.5));
    console.log(colors);
}


//Красим карты и делаем их неактивными 
function addColor() {
    let cards = document.querySelectorAll('.card');
    cards.forEach((e, index) => {
        e.classList.add(`${colors[index]}`, 'inactive')

    })

    console.log(cards);
}

//Ресетим класс кард, что при многократном нажатии на кнопу старт цвета не добавлялись к существующим
function reset() {
    let cards = document.querySelectorAll('.card');
    cards.forEach((e) => {
        e.classList = "card";
    })
}


function Game() {
    let arr = [];
    let newArr = [];
    let cards = document.querySelectorAll(".card");
    cards.forEach((e, index) => {
        e.addEventListener('click', function () {
            let flag = true;
            e.classList.remove("inactive");
            arr.push(e);
            if (arr.length > 2) {
                arr.forEach((e) => {
                    e.classList.add("inactive");
                })
                arr = [];
            }
            if (arr.length == 2) {

                if (arr[0].classList.contains(colors[index]) != arr[1].classList.contains(colors[index])) {
                    setTimeout(function () {
                        arr[0].classList.add("inactive");
                        arr[1].classList.add("inactive");
                        arr = [];
                    }, 500);
                } else {
                    newArr.push(e);
                    console.log(newArr);
                    console.log(newArr.length);
                    arr = [];
                }
            }
            if (newArr.length == 8) {
                setTimeout(function () {
                    alert("You win");
                }, 100);

                newArr = [];
            }
        });
    });
}