import styles from './Symbol.module.css';

const symbolName = (imageSrc) => {
    const regex = /.svg/g;
    const splitedSymbolPath = imageSrc.split(/[/-]/);    
    return splitedSymbolPath.find(symbol => symbol.match(regex)).replace(".svg", "");
}

function Symbol({ imageSrc }) {
    const symbolClass = symbolName(imageSrc);

    return <div className={`${styles.wrapper} ${styles[symbolClass]}`}>
        <img src={ imageSrc } alt="Pape" />
    </div>
}

export default Symbol;