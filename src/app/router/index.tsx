import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Main } from 'pages/main'
import { Antd } from 'pages/antd'

const appRouter = createBrowserRouter([
    {
        path: '/*',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Main />
            },
            {
                path: 'antd',
                element: <Antd />
            }
        ]
    }
])

export { appRouter }