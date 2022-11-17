import React, { useEffect } from 'react';
const HookUseState = () => {
    useEffect(() => {
        console.log('useEffect 无参数 执行次数');
    });
    useEffect(() => {
        console.log('useEffect 空数组参数 执行次数');
    }, [])
    return (
        <div className="section">
            <h3>2. useEffect</h3>
        </div>
    );
};
export default HookUseState;
