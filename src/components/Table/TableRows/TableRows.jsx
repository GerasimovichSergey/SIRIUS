import style from './TableRows.module.css';
import { SIRIUS_GAMES } from '../../../const.js';
import { calcDaysUntilTheGame } from '../../../helpers/dateHelpers.js';
import { Fragment } from 'react';
import plural from 'plural-ru';


export const TableRows = () => {
    const todayDate = Date.now();

    return SIRIUS_GAMES.map((game) => {
        const daysUntilTheGame = calcDaysUntilTheGame(todayDate, game.date);
        const pluralDays = plural(daysUntilTheGame, 'день', 'дня', 'дней');

        return (
            <Fragment key={game.date}>
                <tr className={style.row} key={game.date}>
                    <td className={style.dateCell}>{game.date}</td>
                    <td className={style.timeCell}>{game.time}</td>
                    <td className={style.vsCell}>{game.vs}</td>
                    <td className={style.scoreCell}>
                        {game.score.length ?
                            <>
                            <span className={game.score[0] > game.score[1] ?
                                style.win : style.lose}>
                                {game.score[0]}
                            </span> : {game.score[1]}
                            </> : null}
                    </td>
                </tr>
                {!game.score.length ?
                    <tr>
                        <td className={style.countCell} colSpan={4}>
                            {calcDaysUntilTheGame(todayDate, game.date) >= 1 ?
                                <>До игры осталось <span
                                    className={style.days}>{daysUntilTheGame}</span> {pluralDays}
                                </> : <span className={style.days}>{daysUntilTheGame}</span>}
                        </td>
                    </tr> : ''}
            </Fragment>
        );
    });
};

