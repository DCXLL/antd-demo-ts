import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Cardd from './card';
const CARD_INIT_List = [
    {
        id: 0,
        text: '0',
    },
    {
        id: 1,
        text: '1',
    },
    {
        id: 2,
        text: '2',
    },
    {
        id: 3,
        text: '3',
    },
    {
        id: 4,
        text: '4',
    },
];
const ReactDnD = () => {
    const [cardList, setCardList] = useState(CARD_INIT_List);
    const changePosition = (dragIndex: number, targetIndex: number) => {
        const list = [...cardList];
        const temp = list[targetIndex];
        list[targetIndex] = list[dragIndex];
        list[dragIndex] = temp;
        setCardList(list);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            {cardList.map(({ text, id }, index) => {
                return (
                    <Cardd
                        changePosition={changePosition}
                        index={index}
                        text={text}
                        id={id}
                        key={id}
                    />
                );
            })}
        </DndProvider>
    );
};
export default ReactDnD;
