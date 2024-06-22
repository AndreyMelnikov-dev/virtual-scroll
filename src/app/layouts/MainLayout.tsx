import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import { SidebarBody, SidebarNavigation } from 'widgets/sidebar'

const MainLayout = () => {
    return (
        <Layout
            style={{ height: '100vh' }}
            hasSider={true}
        >
            <SidebarBody
                navigationSlot={<SidebarNavigation />}
            />
            <Content style={{ padding: 12, height: '100vh', boxSizing: 'border-box' }}>
                <Outlet />
            </Content>
        </Layout>
    )
}
export { MainLayout }