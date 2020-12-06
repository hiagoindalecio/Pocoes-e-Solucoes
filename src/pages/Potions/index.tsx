import React from 'react';
//import { useEffect, useState} from 'react';
import './styles.css';
import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';

import Potion from '../../components/Potion';

const Potions = () => {
    /*interface Potion {
        imgSrc: string;
        title: string;
        text: string;
    }

    const [potions, setPotions] = useState<Potion[]>();

    useEffect(() => {
        const potion: Potion = {
            imgSrc: 'http://clipart-library.com/newhp/Halloween_Potion_PNG_Clip_Art_Image.png',
            title: 'Poção do Envelhecimento',
            text: 'Esta poção tem o poder de envelhar uma pessoa cerca de 5 anos por gota.'
        };
        alert(potion);
        setPotions([ ...potions, potion ])
    }, []);*/

    return (
        <div id="potions-page">
            <h1><br/>Qual iguaria você levará hoje?</h1>
            <h4><br/><br/>
                Selecione o que quiser, sinta-se a vontade.
                <br/><br/>
            </h4>
            <div className="potions">
                {
                    /*potions.map(item => (
                        Potion(item.imgSrc, item.title, item.text)
                    ))*/
                    Potion('http://clipart-library.com/newhp/Halloween_Potion_PNG_Clip_Art_Image.png', 'Poção do Envelhetriz', 'Esta poção tem o poder de envelhar uma pessoa cerca de 5 anos por gota.', 'US$15.70')
                }
                {Potion('http://clipart-library.com/img/731677.png', 'Susana Herbalícia', 'Erva utilizada na produção de poções de crescimento.', 'US$24.45')}
                {Potion('http://clipart-library.com/new_gallery/105919_potion-png.png', 'Poção Amoriti', 'Esta poção tem o poder de sustentar uma relação amoroza momentânea.', 'US$67.90')}
                {Potion('http://clipart-library.com/newhp/Blue_Poison_Potion_PNG_Clipart.png', 'Poção Trupique', 'Esta poção diminui a habilidade de se monimentar corretamente por alguns minutos.', 'US$40.89')}
            </div>
        </div>
    );
};

export default Potions;