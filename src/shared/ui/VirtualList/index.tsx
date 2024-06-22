import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, List, Typography } from 'antd'

type VirtualListProps = {
    // TODO: исправить типизацию пропсов
    columns: {
        label: string,
        key: string,
        renderer?: (data: any) => ReactNode
    }[],
    data: any[],
    itemHeight: number,
    boxHeight: number
}

const VirtualList: FC<VirtualListProps> = ({ columns, data, itemHeight, boxHeight }) => {

    const scrollHeight = useMemo(() => itemHeight * data.length, [data, itemHeight])
    const elementsPerView = useMemo(() => Math.ceil(boxHeight / itemHeight), [boxHeight, itemHeight])
    const ref = useRef<HTMLDivElement>(null)
    const [skipped, setSkipped] = useState(0)

    useEffect(() => {
        const scrollingBox = ref.current

        const scrollHandler = (e: Event) => {
            const scrolledItems = Math.ceil((e.currentTarget as HTMLElement).scrollTop / itemHeight)
            setSkipped(scrolledItems)
        }

        scrollingBox?.addEventListener('scroll', scrollHandler)

        return () => {
            scrollingBox?.removeEventListener('scroll', scrollHandler)
        }
    }, [itemHeight])


    return (
        <div>
            <Flex
                style={{
                    backgroundColor: '#fafafa',
                }}
            >
                {columns.map(item =>
                    <div key={item.key} style={{ width: `calc(100% / ${columns.length})` }}>
                        <TableTd>{item.label}</TableTd>
                    </div>
                )}
            </Flex>
            <div
                data-testid="scroll-cont"
                ref={ref}
                style={{
                    height: boxHeight + 'px',
                    overflow: 'auto',
                    position: 'relative',
                }} >
                <List style={{ height: scrollHeight + 'px' }}>
                    {
                        data
                            .slice(skipped === 0
                                ? skipped
                                : skipped - 1, elementsPerView + skipped)
                            .map((row, index) =>
                                <List.Item
                                    key={row.id}
                                    style={
                                        {
                                            position: 'absolute',
                                            height: itemHeight + 'px',
                                            top: skipped === 0 ? itemHeight * (index + skipped) : itemHeight * (index + skipped - 1) + 'px',
                                            width: '100%'
                                        }}>
                                    <Flex style={{ width: '100%' }}>
                                        {
                                            columns.map(item =>
                                                <div key={item.key} style={{ width: `calc(100% / ${columns.length})` }}>
                                                    <TableTd>{item.renderer ? item.renderer(row) : row[item.key]}</TableTd>
                                                </div>
                                            )
                                        }
                                    </Flex>
                                </List.Item>
                            )
                    }
                </List>
            </div>
        </div >
    )
}

const TableTd: FC<{ children?: ReactNode }> = ({ children }) => {
    return <div
        style={{
            boxSizing: 'border-box',
            padding: 12,
        }}
    >
        <Typography
            style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}
        >
            {children}
        </Typography>
    </div>
}


export { VirtualList }
