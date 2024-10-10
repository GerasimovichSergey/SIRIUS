import style from './Table.module.css';
import { TableRows } from './TableRows/TableRows.jsx';


export const Table = () => {
    return (
        <table className={style.table}>
            <thead>
            <tr className={style.row}>
                <th className={style.headerCell}>Дата</th>
                <th className={style.headerCell}>Время</th>
                <th className={style.headerCell}>Соперник</th>
                <th className={style.headerCell}>Результат</th>
            </tr>
            </thead>
            <tbody>
            <TableRows />
            </tbody>
        </table>
    );
};