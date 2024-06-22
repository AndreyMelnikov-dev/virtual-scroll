import { Flex, Typography } from 'antd'
import { AntdTable } from 'widgets/antd'

const Antd = () => {
    return (
        <Flex vertical gap="large">
            <Typography.Title>Виртуальный скролл от AntD</Typography.Title>
            <AntdTable />
        </Flex>
    )
}
export { Antd }