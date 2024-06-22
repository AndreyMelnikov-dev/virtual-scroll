import { render, screen } from '@testing-library/react'
import { VirtualList } from './index'
import { Button } from 'antd'
import { mockDataResp } from 'entities/main/mock/mockGetDataResp'



describe('VirtualList', () => {

    const mockTableCols = [
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
            renderer: () => <Button data-testid="test-button-id">Test Button</Button>
        },

    ]

    it('simple render with required props', () => {
        const mockData = [
            {
                id: '1',
                name: 'Roman Roman',
                email: 'email@email.com',
                age: 20
            }
        ]
        render(
            <VirtualList
                boxHeight={100}
                itemHeight={40}
                columns={mockTableCols}
                data={mockData}
            />
        )

        // check table header
        expect(screen.getByText(mockTableCols[0].label)).toBeInTheDocument()
        expect(screen.getByText(mockTableCols[1].label)).toBeInTheDocument()
        expect(screen.getByText(mockTableCols[2].label)).toBeInTheDocument()
        expect(screen.getByText(mockTableCols[3].label)).toBeInTheDocument()
        expect(screen.getByText(mockTableCols[4].label)).toBeInTheDocument()

        //  check table data
        expect(screen.getByText(mockData[0].age)).toBeInTheDocument()
        expect(screen.getByText(mockData[0].email)).toBeInTheDocument()
        expect(screen.getByText(mockData[0].id)).toBeInTheDocument()
        expect(screen.getByText(mockData[0].name)).toBeInTheDocument()

        // check reactNode render inside table 
        expect(screen.getByTestId('test-button-id')).toBeInTheDocument()
    })

    it('render with large data', async () => {

        render(
            <VirtualList
                boxHeight={100}
                itemHeight={40}
                columns={mockTableCols}
                data={mockDataResp}
            />
        )

        // TODO: move mocks to shared(?)
        // Hurley Ellis = last object.name from mockDataResp
        expect(screen.queryByText(/Hurley Ellis/)).not.toBeInTheDocument()
        const scrollContainer = screen.getByTestId('scroll-cont')

    })

    // it('render last element on scroll', async () => {
    // })

})