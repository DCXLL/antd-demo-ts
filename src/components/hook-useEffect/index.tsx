import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';
const HookUseState = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    useEffect(() => {
        console.log(`useEffect 变量全部传参计算两数之和为:${countA + countB}`);
    }, [countA, countB]);

    useEffect(() => {
        console.log(`useEffect 变量单个传参计算两数之和为:${countA + countB}`);
    }, [countA]);

    useEffect(() => {
        console.log('useEffect 空数组参数 执行次数');
    }, []);

    useEffect(() => {
        console.log('useEffect 无参数 执行次数');
        console.log(`useEffect 变量未传参计算两数之和为:${countA + countB}`);
        console.log(
            '----------------------------------END----------------------------------'
        );
    });

    useEffect(() => {
        return () => {
            console.log('組件被卸载');
        };
    }, []);

    return (
        <div className="section">
            <h3>2. useEffect</h3>
            <h4>
                页面上的变量放在useEffect中使用时传参到数组里可以防止过多渲染,useEffect中取变量最新值
            </h4>
            <Space>
                <Button
                    onClick={() => {
                        setCountA(countA + 1);
                        console.log(
                            `useEffect 未使用计算变量之和为:${countA + countB}`
                        );
                    }}
                >
                    countA++
                </Button>
                <Button
                    onClick={() => {
                        setCountB(countB + 1);
                        console.log(
                            `useEffect 未使用计算变量之和为:${countA + countB}`
                        );
                    }}
                >
                    countB++
                </Button>
            </Space>
        </div>
    );
};
export default HookUseState;
