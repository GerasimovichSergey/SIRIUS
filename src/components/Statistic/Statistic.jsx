import style from './Statistic.module.css';


export const Statistic = () => {
    return (
        <div className={style.statisticWrapper}>
            <h3 className={style.statisticUpdateTitle}>Последнее обновление файлов статистики: 17.10.2024</h3>
            <ul className={style.statistic}>
                <li className={style.statisticItem}>Статистика команды &#8594;<a className={style.statisticItemLink}
                                                                        href="/statistic/SIRIUS.xlsx">Скачать</a>
                </li>
                <li className={style.statisticItem}>Лучшие по номинациям &#8594;<a className={style.statisticItemLink}
                                                                           href="/statistic/best-nominations.xlsx">Скачать</a>
                </li>
                <li className={style.statisticItem}>Рейтинг команд &#8594;<a className={style.statisticItemLink}
                                                                     href="/statistic/raiting-teams.xlsx">Скачать</a>
                </li>
            </ul>
        </div>
    );
};