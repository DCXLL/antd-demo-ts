import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import classNames from 'classnames';
import styles from './index.less';

const Card = ({ text, changePosition, id, index }: any) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: 'DragDropBox',
        // options:{},
        canDrop:(item, monitor) => {
            return false
        },
        hover: (item: any, monitor) => {
            if (!ref.current) return;
            let dragIndex = item.index;
            let targetIndex = index;
            if (dragIndex === targetIndex) return; // 如果回到自己的坑，那就什么都不做
            changePosition(dragIndex, targetIndex); // 调用传入的方法完成交换
            item.index = targetIndex; // 将当前当前移动到Box的index赋值给当前拖动的box，不然会出现两个盒子疯狂抖动！
        },
        drop: (item, monitor) => {},
    });

    const [{ isDragging }, drag, DragPreview] = useDrag({
        type: 'DragDropBox',
        item: { id, index },
        // previewOptions:{},
        // options:{},
        // end: () => {},
        // canDrag:() => {
        //     return true
        // },
        // isDragging:() => {
        //     return true
        // },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },
    });
    return (
        <div
            className={classNames(styles.cardbox, styles[`color${id}`])}
            ref={drag(drop(ref)) as any}
            // ref={isDragging ? drag : DragPreview}
            style={{ opacity: isDragging ? 0.3 : 1 }}
        >
            {text}
        </div>
    );
};
export default Card;
// Board ==》 DndProvider ==》 Knight ==》
