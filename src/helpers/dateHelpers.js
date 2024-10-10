export const calcDaysUntilTheGame = (todayDate, gameDate) => {
    const reformatDate = gameDate.split('.').reverse().join('-');

    const daysToGameInMilliseconds = Date.parse(reformatDate) - todayDate;

    const daysUntilTheGame = daysToGameInMilliseconds / 1000 / 60 / 60 / 24;

    if (daysUntilTheGame > 1) {
        return Math.trunc(daysUntilTheGame);
    } else if (daysUntilTheGame >= 0 && daysUntilTheGame <= 1) {
        return 'Игра ЗАВТРА';
    } else if (daysUntilTheGame < 0 && daysUntilTheGame > -1) {
        return 'Игра СЕГОДНЯ';
    }
};

// если число > 0 и число < 1 => тогда игра завтра
// если число < 0 и число больше -1 => тогда игра сегодня