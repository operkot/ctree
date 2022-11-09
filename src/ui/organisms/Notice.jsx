import { Flex } from 'ui/atoms'
import { NoticeItem } from 'ui/molecules'

const data = [
  { title: '1', caption: 'Миллион рублей', variant: 'danger' },
  { title: '27', caption: 'iPhone 14', variant: 'warning' },
  {
    title: '5',
    subtitle: 'декабря',
    caption: 'Ближайший розыгрыш',
    variant: 'success',
  },
]

export const Notice = props => (
  <Flex justifyContent={{ _: 'center', lg: 'flex-start' }} {...props}>
    {data.map((notice, idx) => (
      <NoticeItem
        key={idx}
        {...notice}
        w="100%"
        maxWidth={{ _: '84px', lg: '96px' }}
        mr={{ _: '24px', lg: '32px', last: 0 }}
      />
    ))}
  </Flex>
)
