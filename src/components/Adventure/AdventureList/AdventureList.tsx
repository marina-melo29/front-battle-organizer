import React from 'react';
import './adventureList.css';
import ItemList from '../../List/List';

interface AdventureListProps {
  onShowForm: () => void;
}

const itemsData = [
    { name: 'Monkey D. Luffy', image: 'luffy.png' },
    { name: 'Jorge Bat', image: 'jorge_bat.png'},
    { name: 'Chopper', image: 'chopper.png'},
    { name: 'Cacatua', image: 'cacatua.png'},
    { name: 'MONSTRO ELEFANTOGUN', image: 'monstro_elefantogun.png' }
];

function onAddItem() {
    console.log("Item adicionado");
}

function onEditItem(item: any) {
    console.log("Editar item:", item);
}

function onShowItem(item: any) {
    console.log("Mostrar item:", item);
}

function onDeleteItem(item: any) {
    console.log("Deletar item:", item);
}

const AdventureList: React.FC<AdventureListProps> = ({ onShowForm }) => {
  return (
        <div className="adventure-list-container">
            <h1>Aventuras</h1>
            <ItemList
                items={itemsData}
                onAddItem={onShowForm}
                onEditItem={onEditItem}
                onShowItem={onShowItem}
                onDeleteItem={onDeleteItem}
            />
        </div>
    );
}

export default AdventureList;
