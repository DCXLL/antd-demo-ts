import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Space } from 'antd';
const Child = React.memo(({ count, cb }: any) => {
    console.log('Child子组件渲染次数');
    return <div onClick={cb}>useMemo缓存count,当前count:{count}</div>;
});
const HookUseState = () => {
    const [count, setCount] = useState(0);

    const handle = (temp: number) => {
        setCount(count + temp);
    };
    
    const VV = useMemo(() => {
        return count;
    }, []); // 存的是值

    const FF = useCallback(() => {
        console.log(`useCallback缓存count,当前count:${count}`);
    }, []); // 存的是函数

    return (
        <div className="section">
            <h3>1. useState</h3>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        handle(1);
                    }}
                >
                    +
                </Button>
                <Button danger>{count}</Button>
                <Button
                    type="dashed"
                    onClick={() => {
                        handle(-1);
                    }}
                >
                    -
                </Button>
                <Button type="primary">
                    <Child count={VV} cb={FF} />
                </Button>
            </Space>
        </div>
    );
};
export default HookUseState;
