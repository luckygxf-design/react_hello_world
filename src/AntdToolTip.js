/* eslint-disable import/no-anonymous-default-export */
import {Button, ConfigProvider, Space, Tooltip} from 'antd'

export default ()  => (
    <ConfigProvider tooltip={{
        unique: true,
    }}>
        <Space>
            <Tooltip title='第一个提示'>
                <Button>按钮1</Button>
            </Tooltip>
            <Tooltip title='第二个提示'>
                <Button>按钮2</Button>
            </Tooltip>
        </Space>
    </ConfigProvider>
);