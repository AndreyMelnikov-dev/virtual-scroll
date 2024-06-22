import { useQuery } from '@tanstack/react-query'
import { Flex } from 'antd'
import { mainApi } from 'entities/main'
import { DataDeleteButton, DataInfoButton } from 'features/main'
import { VirtualList } from 'shared/ui/VirtualList'

const MainTable = () => {

    const { data } = useQuery({
        queryKey: mainApi.qkGetData(),
        queryFn: () => mainApi.getData()
    })

    return (
        <Flex
            vertical
            gap="small"
        >
            <VirtualList
                columns={
                    [
                        {
                            label: 'Номер',
                            key: 'id'
                        },
                        {
                            label: 'Имя',
                            key: 'name',
                        },
                        {
                            label: 'E-mail',
                            key: 'email'
                        },
                        {
                            label: 'Возраст',
                            key: 'age'
                        },
                        {
                            label: 'Взаимодействия',
                            key: 'some',
                            renderer: (data) =>
                                <Flex gap="small">
                                    <DataInfoButton />
                                    <DataDeleteButton />
                                </Flex>
                        },

                    ]
                }
                data={data ?? []}
                boxHeight={300}
                itemHeight={48}
            />
        </Flex>
    )
}
export { MainTable }