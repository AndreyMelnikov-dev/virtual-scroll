import { InfoCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const DataInfoButton = () => {
    return (
        <Button
            onClick={() => {
                alert('INFO')
            }}
            size="small"
            icon={<InfoCircleOutlined />}
        />
    )
}
export { DataInfoButton }