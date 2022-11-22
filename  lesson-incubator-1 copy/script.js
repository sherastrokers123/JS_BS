const minNum = 0;
const maxNum = 100;
const numberOfAttempts = 10;

const getRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100); // случайное число от 0 до 1 значит нужно умножить на 100 и все округлить методом Math.round()
    return randomNumber;
};
const randomNumber = getRandomNumber();
console.log(randomNumber);

const getPlayerName = () => {
    const playerName = prompt("Привет как тебя зовут ?", "");
    return playerName;
};

const playerName = getPlayerName();
console.log(playerName);

const bigGame = (min, max, attempts, randomNum, player) => {
    alert(`Привет, ${player}! Я загадал число от ${min} до ${max} у тебя есть ${attempts} попыток ну давай отгадай! вот тебя морж для ужачи :3))) `);
    for (let index = 1; index <= attempts; index++) {
        const answer = prompt('Пиши свой вариант!', "Введи число");
        // поверка 
        if (answer < randomNum) {
            alert(`я загадал большее число й тебя осталось ${attempts - index} попыток.`);
        } else if (answer > randomNum) {
            alert(`я загадал меньше число й тебя осталось ${attempts - index} попыток.`);
        } else {
            alert(`${player},Дай краба ты супер!`);
            return;
        }
    }
    alert(`О нет !!!! тебе нехватило ${attempts} попыток, убейся ап стену!!!!!`);
};

bigGame(minNum, maxNum, numberOfAttempts, randomNumber, playerName);

