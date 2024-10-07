import style from './Header.module.css';
import { Container } from '../Container/Container.jsx';
import { Petrovich } from '../Petrovich/Petrovich.jsx';


export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <h1 className={style.title}>2024-25 Sirius Schedule</h1>
                <div className={style.logo}></div>
                <Petrovich />
            </Container>
        </header>
    );
};