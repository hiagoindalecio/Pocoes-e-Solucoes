import React from 'react';
import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';
import './styles.css';

const Potion: React.FC<{
    imgSource: string,
    title: string,
    text: string,
    price: string
}> = ({
    imgSource,
    title,
    text,
    price
}) => {
    const checkTitle = title ? title : 'Empty title';
    const checkText = text ? text : 'Empty text';
    const checkPrice = price ? price : 'Empty price';

    function handleClick() {
        alert(`Comprar ${checkTitle}\n\nValor: ${checkPrice}`);
    }

    return (
        <div className="card">
            <img src={imgSource} className="card-img-top" alt="potion"/>
            <div className="card-body">
                <h5 className="card-title">{checkTitle}</h5>
                <p className="card-text">{checkText}</p>
                <h4 className="card-text">{checkPrice}</h4>
                <button className="btn btn-dark" onClick={handleClick}>Comprar</button>
            </div>
        </div>
    );
}

export default Potion;