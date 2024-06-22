import { ConfigProvider } from 'antd'
import { FC, ReactNode } from 'react'
import ruRu from 'antd/locale/ru_RU'

const ThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <ConfigProvider
            locale={ruRu}
            // TODO: вынести в файл темы
            theme={{
                components: {
                    Layout: {
                        siderBg: '#E4E4E7',
                        bodyBg: '#EEEEEE'
                    },
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export { ThemeProvider }