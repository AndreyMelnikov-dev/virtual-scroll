import { VirtualList } from './shared/ui/VirtualList';
import mockData from './entities/main/mock.json'

const App = () => {
  return (
    <div className="App">
      <VirtualList
        columns={[
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
            label: 'Статус',
            key: 'status'
          }
        ]}
        data={mockData as any}
        itemHeight={30}
        boxHeight={330}
      />
    </div>
  );
}

export { App }
