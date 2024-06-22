import Sider from 'antd/es/layout/Sider'
import { Flex, Typography } from 'antd'
import { FC, ReactNode } from 'react'

type SidebarBodyProps = {
    navigationSlot?: ReactNode
}

const SidebarBody: FC<SidebarBodyProps> = ({ navigationSlot }) => {
    return (
        <Sider>
            <Flex
                style={{ height: '100%', padding: 12, boxSizing: 'border-box' }}
                vertical
                gap="large"
                justify="space-between"
            >
                <Flex vertical gap="middle">
                    <Typography.Title level={3} style={{ margin: '0' }}>LOGO</Typography.Title>
                    {navigationSlot}
                </Flex>
                <Flex vertical gap="middle">
                    <Typography style={{ opacity: '0.5' }}>v1.0.0</Typography>
                </Flex>
            </Flex>
        </Sider>
    )
}
export { SidebarBody }