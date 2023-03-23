import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Space } from 'antd';
import { UserBaseInfo } from '@/context/userInfo';
const Child = React.memo(({ count, cb }: any) => {
    console.log('Child子组件渲染次数');
    return <div onClick={cb}>useMemo缓存count,当前count:{count}</div>;
});
const ChildRef:React.FC<any> = React.forwardRef((props, ref:any) => {
    return <Button ref={ref} onClick={() => console.log('child')} name="1">{props.name}Ref按钮</Button>
})
const HookUseState = () => {
    const [count, setCount] = useState(0);
    const useRef = React.createRef()
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
        <UserBaseInfo.Consumer>
            {(userInfo) => {
                return (<div className="section">
                <h3>1. useState</h3>
                <div>你好{userInfo.username}</div>
                
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
                    <ChildRef ref={useRef} name="childRef"></ChildRef>
                    <Button onClick={() => {
                        console.log(useRef.current)
                    }}>获取子按钮dom</Button>
                </Space>
            </div>)
            }}
        </UserBaseInfo.Consumer>
        
    );
};
export default HookUseState;
