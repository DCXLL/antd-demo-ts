import { Badge, Button, Dropdown, Space, Table } from 'antd';
import Item from 'antd/lib/list/Item';
import { useEffect, useState } from 'react';
const data = [
    {
        key: 1,
        name: '冲突管理',
        description: '指标描述1',
        category: '专业',
        cc: [
            {
                key: 1 - 1,
                parent: '1',
                name: '冲突管理-字',
                description: '指标描述1-子',
                category: '专业',
            },
            {
                key: 1 - 5,
                parent: '1',
                name: '冲突管理-字',
                description: '指标描述1-子',
                category: '专业',
            },
        ],
    },
    {
        key: 2,
        name: '指标名称',
        description: '指标描述2',
        category: '通用',
        cc: [
            {
                key: 1 - 2,
                parent: '2',
                name: '冲突管理-字',
                description: '指标描述1-子',
                category: '专业',
            },
        ],
    },
    {
        key: 3,
        name: '指标名称',
        description: '指标描述2',
        category: '通用',
    },
    {
        key: 4,
        name: '指标名称',
        description: '指标描述2',
        category: '通用',
    },
];
const expandedRowRender = (record: any, onChange:any) => {
    const columns: any = [
        { title: '指标名称', dataIndex: 'name', key: 'name' },
        { title: '指标描述', dataIndex: 'description', key: 'description' },
        { title: '指标类别', dataIndex: 'category', key: 'category' },
    ];

    return (
        <Table
            columns={columns}
            showHeader={false}
            dataSource={record.cc}
            pagination={false}
            rowSelection={{ type: 'radio', onChange, onSelect:(keys)=> {
            }}}
        />
    );
};

const columns: any = [
    { title: '指标名称', dataIndex: 'name', key: 'name' },
    { title: '指标描述', dataIndex: 'description', key: 'description' },
    { title: '指标类别', dataIndex: 'category', key: 'category' },
];
interface IRow {
    parent:string
}
const AntdTable = () => {
    const [list, setList] = useState([]);
    const [radioInfo,setRadioInfo] = useState({});
    const [select, setSelect] = useState<number[]>([]);
    const onChange = (keys:number[], row:IRow[]) => {
        const info:any= {...radioInfo};
        info[row[0]['parent']] = keys[0]
        setRadioInfo(info)
    };
    useEffect(() => {
        const aa:[] | number[] = Object.values(radioInfo) || [];
        setSelect([...list, ...aa])
    },[list, radioInfo])
    return (
        <>
            <h3>antd 表格</h3>
            <Table
                columns={columns}
                expandable={{
                   
                    expandedRowRender: (record) =>
                        expandedRowRender(record, onChange),
                    rowExpandable: (record) => {
                        return !!record.cc;
                    },
                    defaultExpandedRowKeys: ['0'],
                }}
                rowSelection={{
                    type: 'checkbox',
                    preserveSelectedRowKeys:true,
                    hideSelectAll: true,
                    onChange: (keys:any, rows) => {
                        setList(keys);
                    },
                    getCheckboxProps: (record: any) => {
                        return {
                            disabled: record.cc && !!record.cc.length,
                        };
                    },
                }}
                dataSource={data}
            />
            <Button onClick={() => {console.log(select)}}>提交表格选中数据</Button>
        </>
    );
};
export default AntdTable;
