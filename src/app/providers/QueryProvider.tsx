import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

const client = new QueryClient()

const QueryProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
export { QueryProvider }