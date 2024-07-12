import React from 'react';
import './adventureList.css';
import ItemList from '../../List/List';

const itemsData = [
    { name: 'Monkey D. Luffy', image: 'luffy.png' },
    { name: 'Jorge Bat', image: 'jorge_bat.png'},
    { name: 'Chopper', image: 'chopper.png'},
    { name: 'Cacatua',image: 'cacatua.png'},
    { name: 'MONSTRO ELEFANTOGUN', image: 'monstro_elefantogun.png' }
];

const AdventureList: React.FC = () => {
    return (
        <div className="adventure-list-container">
            <h1>Aventuras</h1>
            <ItemList items={itemsData} />
        </div>
    );
}

export default AdventureList;
