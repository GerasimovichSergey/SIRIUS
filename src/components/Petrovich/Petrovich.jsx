import style from './Petrovich.module.css';
import petrovichPhoto from '../../assets/images/petrovich.jpg';


export const Petrovich = () => {
    return (
        <div className={style.petrovichWrapper}>
            <img className={style.petrovichImg} src={petrovichPhoto} alt="Фотограя Петровича" />
            <p className={style.petrovichQuote}>
                <q>Я жму на газ и от груди</q> © <b>Лука Пончич</b> #77 — игрок стартового состава <b>Boston Celtics</b>.
            </p>
        </div>
    );
};