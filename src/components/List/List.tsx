import React, { useState } from 'react';
import './list.css';
import EditIcon from "../../assets/images/components/edit-icon.png";
import DeleteIcon from "../../assets/images/components/delete-icon.png";
import EyeIcon from "../../assets/images/components/eye-icon.png";

interface Item {
    name: string;
    image: string;
    hidden?: boolean;
}

interface ItemListProps {
    items: Item[];
    onAddItem: () => void;
    onEditItem: (item: Item) => void;
    onShowItem: (item: Item) => void;
    onDeleteItem: (item: Item) => void;
}

const ItemCard: React.FC<{ item: Item; onShowItem: (item: Item) => void; onEditItem: (item: Item) => void; onDeleteItem: (item: Item) => void; }> = ({ item, onShowItem, onEditItem, onDeleteItem }) => {
    return (
        <div className={`Item-card ${item.hidden ? 'hidden' : ''}`}>
            <img src={item.image} className="Item-image" alt={item.name} />
            <div className="Item-info">
                <h3 className={`Item-name 'highlight'}`}>{item.name}</h3>
            </div>
            <div className="actions-container">
                <img src={EyeIcon} className="actions-icons" onClick={() => onShowItem(item)} />
                <img src={EditIcon} className="actions-icons" onClick={() => onEditItem(item)} />
                <img src={DeleteIcon} className="actions-icons" onClick={() => onDeleteItem(item)} />
            </div>
        </div>
    );
}

const ItemList: React.FC<ItemListProps> = ({ items, onAddItem, onEditItem, onShowItem, onDeleteItem }) => {
    return (
        <>
            <div className="Item-list">
                {items.map(item => (
                    <ItemCard
                        key={item.name}
                        item={item}
                        onShowItem={onShowItem}
                        onEditItem={onEditItem}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </div>
            <div className="add-list-container">
                <button className="Add-button" onClick={onAddItem}>+</button>
            </div>
        </>
    );
}

export default ItemList;
