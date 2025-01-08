import style from './GridContainer.module.scss';

export function GridContainer({ children, columns }) {

    const inlinestyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    };

    return (
        <div className={style.grid} style={{ ...inlinestyle}}>
            {children}
        </div>
    )
}
