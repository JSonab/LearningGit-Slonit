const ComputersGameGuessing = () => {
    let plannedNum = Math.ceil(Math.random()*100); //Загаданное число
    let low = 1;
    let high = 100;
    let someNum;
    let comparison;

    while (comparison !== "Угадал!") {
        someNum = Math.floor((low + high) / 2);
        console.log(`Компьютер 2: Пробую число ${someNum}`);

        if (someNum < plannedNum){
            comparison = "Больше";
            low = someNum + 1;
        }

        else if(someNum > plannedNum){
            comparison = "Меньше";
            high = someNum - 1;
        }

        else{
            comparison = "Угадал!";
        }

        console.log(`Компьютер 1: ${comparison}`);
            
    }
}


ComputersGameGuessing();