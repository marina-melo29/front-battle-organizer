import React from 'react';
import './list.css'
import EditIcon from "../../assets/images/components/edit-icon.png"
import DeleteIcon from "../../assets/images/components/delete-icon.png"
import EyeIcon from "../../assets/images/components/eye-icon.png"

interface Item {
    name: string;
    image: string;
}

interface ItemListProps {
    items: Item[];
}

const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
    return (
        <div className="Item-card">
            <img src={item.image} className="Item-image" />
            <div className="Item-info">
                <h3 className={`Item-name 'highlight'}`}>{item.name}</h3>
            </div>
            <div className="actions-container">
              <img src={EyeIcon} className="actions-icons" />
              <img src={EditIcon} className="actions-icons" />
              <img src={DeleteIcon} className="actions-icons" />
            </div>
        </div>
    );
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <div className="Item-list">
            {items.map(item => (
                <ItemCard key={item.name} item={item} />
            ))}
        </div>
    );
}

export default ItemList;
