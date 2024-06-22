import { Flex, Typography } from 'antd'
import { MainTable } from 'widgets/main'

const Main = () => {
    return (
        <Flex vertical gap="large">
            <Typography.Title>Виртуальный скролл</Typography.Title>
            <MainTable />
        </Flex>
    )
}
export { Main }