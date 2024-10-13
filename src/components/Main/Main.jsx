import style from './Main.module.css';
import { Container } from '../Container/Container.jsx';
import { Table } from '../Table/Table.jsx';


export const Main = () => {
    return (
        <main className={style.main}>
            <Container>
                <div className={style.tableWrapper}>
                    <Table />
                </div>
            </Container>
        </main>
    );
};