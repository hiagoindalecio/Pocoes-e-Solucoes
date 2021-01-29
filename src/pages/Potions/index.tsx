import React from 'react';
//import { useEffect, useState} from 'react';
import './styles.css';
import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';

import Potion from '../../components/Potion';

interface potionsReply {
    props: {
        content: [{
            name: string,
            description: string,
            img: string
        }]
    }
}

const Potions: React.FC<potionsReply> = ({props}) => {

    return (
        <div id="potions-page">
            <h1><br/>Qual iguaria você levará hoje?</h1>
            <h4><br/><br/>
                Selecione o que quiser, sinta-se a vontade.
                <br/><br/>
            </h4>
            <div className="potions">
                {
                    props.content.map((item, index: number) => 
                    <div key={index}><br/><Potion imgSource={item.img} title={item.name} text={item.description} price={'US$' + (Math.random() * (50 - 5) + 5).toFixed(2).toString()}></Potion></div>
                    )
                }
            </div>
        </div>
    );
};

export default Potions;