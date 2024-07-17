import './adventureList.css';
import ItemList from '../../List/List';
import React, { useState, useEffect } from 'react';
import ConfirmationModal from '../../Modal/ConfirmationModal';
import { GetAdventures } from '../../../services/adventureService';

interface AdventureListProps {
    onShowForm: () => void;
    onEditItem: (item: any) => void;
}

interface Adventures {
    id: string;
    name: string;
    image: string;
    battle_order: null | string;
    description: string;
    dungeon_master_id: number;
    url_icon: string;
}

function onShowItem(item: any) {
    console.log("Mostrar item:", item);
}

const AdventureList: React.FC<AdventureListProps> = ({ onShowForm, onEditItem }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [itemsData, setItemsData] = useState<Adventures[]>([]);
    const [error, setError] = useState<string | null>(null);

    const openModal = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    const handleDeleteItem = () => {
        document.getElementById(selectedItem.id)?.remove();
        closeModal();
    };

    function onDeleteItem(item: any) {
        openModal(item);
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await GetAdventures();
                if (response.success) {
                    console.log(response);
                    setItemsData(response.data.adventures);
                    setError(null); // Limpa o erro se houver sucesso
                } else {
                    setError("ERRO AO GERAR AVENTURAS");
                }
            } catch (error) {
                console.error('Erro ao tentar trazer aventuras:', error);
                setError('Erro ao trazer aventuras. Tente novamente mais tarde.');
            }
        })();
    }, []);

    return (
        <>
            <div className="adventure-list-container">
                <h1>Aventuras</h1>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <ItemList
                        items={itemsData}
                        onAddItem={onShowForm}
                        onEditItem={onEditItem}
                        onShowItem={onShowItem}
                        onDeleteItem={onDeleteItem}
                    />
                )}
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
