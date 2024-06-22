import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const DataDeleteButton = () => {
    return (
        <Button
            danger
            size="small"
            onClick={() => {
                alert('DELETE')
            }}
            icon={<DeleteOutlined />}
        />
    )
}
export { DataDeleteButton }