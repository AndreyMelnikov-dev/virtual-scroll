import { ThemeProvider } from './providers/ThemeProvider'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'
import { QueryProvider } from './providers/QueryProvider'

const App = () => {
    return (
        <ThemeProvider>
            <QueryProvider>
                <RouterProvider router={appRouter} />
            </QueryProvider>
        </ThemeProvider>
    )
}
export { App }