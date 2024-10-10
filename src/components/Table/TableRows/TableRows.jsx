import style from './TableRows.module.css';
import { SIRIUS_GAMES } from '../../../const.js';
import { calcDaysUntilTheGame } from '../../../helpers/dateHelpers.js';


export const TableRows = () => {
    const todayDate = Date.now();

    return SIRIUS_GAMES.map((game) => {
        return (
            <>
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
                            </> : ''}
                    </td>
                </tr>
                {!game.score.length ?
                    <tr>
                        <td className={style.countCell} colSpan={4}>
                            До игры осталось {calcDaysUntilTheGame(todayDate, game.date)} дней
                        </td>
                    </tr> : ''}
            </>
        );
    });
};

