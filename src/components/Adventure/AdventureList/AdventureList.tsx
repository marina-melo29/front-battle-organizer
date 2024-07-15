import './adventureList.css';
import ItemList from '../../List/List';
import React, { useState } from 'react';
import ConfirmationModal from '../../Modal/ConfirmationModal';

interface AdventureListProps {
    onShowForm: () => void;
}

const itemsData = [
    { name: 'Monkey D. Luffy', image: 'luffy.png' },
    { name: 'Jorge Bat', image: 'jorge_bat.png' },
    { name: 'Chopper', image: 'chopper.png' },
    { name: 'Cacatua', image: 'cacatua.png' },
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

const AdventureList: React.FC<AdventureListProps> = ({ onShowForm }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const openModal = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    const handleDeleteItem = () => {
        console.log("Deletar item:", selectedItem);
        closeModal();
    };

    function onDeleteItem(item: any) {
        console.log("Deletar item:", item);
        openModal(item);
    }

    return (
        <>
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
            <ConfirmationModal
                isOpen={isModalOpen}
                title="Confirmar exclusão"
                content="Você tem certeza que deseja excluir esse item?"
                onClose={closeModal}
                onConfirm={handleDeleteItem}
            />
        </>
    );
}

export default AdventureList;
