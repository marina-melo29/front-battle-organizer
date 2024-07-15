import React from 'react';
import EditIcon from "../../assets/images/components/edit-icon.png";
import DeleteIcon from "../../assets/images/components/delete-icon.png";
import EyeIcon from "../../assets/images/components/eye-icon.png";
import { GlobalStyle, ItemList as StyledItemList, ItemCard as StyledItemCard, ItemImage, ItemInfo, ItemName, ActionsContainer, ActionsIcons, AddButton, AddListContainer } from './StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

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
        <StyledItemCard>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
                <ItemName>{item.name}</ItemName>
            </ItemInfo>
            <ActionsContainer>
                <ActionsIcons as="img" src={EyeIcon} onClick={() => onShowItem(item)} />
                <ActionsIcons as="img" src={EditIcon} onClick={() => onEditItem(item)} />
                <ActionsIcons as="img" src={DeleteIcon} onClick={() => onDeleteItem(item)} />
            </ActionsContainer>
        </StyledItemCard>
    );
}

const ItemList: React.FC<ItemListProps> = ({ items, onAddItem, onEditItem, onShowItem, onDeleteItem }) => {
    return (
        <>
            <GlobalStyle />
            <StyledItemList theme={defaultTheme} >
                {items.map(item => (
                    < ItemCard
                        key={item.name}
                        item={item}
                        onShowItem={onShowItem}
                        onEditItem={onEditItem}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </StyledItemList>
            <AddListContainer theme={defaultTheme} >
                <AddButton theme={defaultTheme} onClick={onAddItem}>+</AddButton>
            </AddListContainer>
        </>
    );
}

export default ItemList;
