import { useQuery } from '@tanstack/react-query'
import { Table } from 'antd'
import { mainApi } from 'entities/main'

const AntdTable = () => {

    const { data } = useQuery({
        queryKey: mainApi.qkGetData(),
        queryFn: () => mainApi.getData()
    })

    return (
        <Table
            virtual={true}
            pagination={false}
            scroll={{
                x: 300,
                y: 300
            }}
            rowKey="id"
            columns={[
                {
                    title: 'Номер',
                    dataIndex: 'id'
                },
                {
                    title: 'Имя',
                    dataIndex: 'name',
                },
                {
                    title: 'E-mail',
                    dataIndex: 'email'
                },
                {
                    title: 'Возраст',
                    dataIndex: 'age'
                },
            ]}
            dataSource={data}
        />
    )
}
export { AntdTable }