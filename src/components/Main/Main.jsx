import style from './Main.module.css';
import { Container } from '../Container/Container.jsx';
import { Table } from '../Table/Table.jsx';
import { Statistic } from '../Statistic/Statistic.jsx';


export const Main = () => {
    return (
        <main className={style.main}>
            <Container>
                <Statistic />
                <Table />
            </Container>
        </main>
    );
};