import { Flex } from 'antd'
import { NavLink } from 'react-router-dom'

const SidebarNavigation = () => {
    return (
        <Flex vertical gap="small">
            <NavLink to="/">Реализация</NavLink>
            <NavLink to="/antd">AntD-версия</NavLink>
        </Flex>
    )
}
export { SidebarNavigation }