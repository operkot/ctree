import { RULES_LAYOUT_BACKGROUND } from 'constants/backgrounds'
import { Text } from 'ui/atoms'
import { LayoutMobile } from 'ui/layout'

export const Rules = () => (
  <LayoutMobile {...RULES_LAYOUT_BACKGROUND}>
    <LayoutMobile.Content>
      <Text
        as="h1"
        mb="32px"
        fontSize="24px"
        fontWeight="600"
        lineHeight="22px"
        textAlign="center"
        color="#fff"
      >
        Правила участия в акции
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        Настоящая стимулирующая акция под названием «Остров сокровищ» (далее по
        тексту - Акция) проводится согласно изложенным ниже условиям (далее по
        тексту – Правила) в рамках рекламной компании. Данная Акция не является
        лотереей либо иной игрой, основанной на риске, не требует внесения платы
        за участие. Процедура проведения Акции не связана с внесением
        Участниками платы за принятие в ней участия, призовой фонд Акции
        сформирован за счет средств Организатора акции.
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        1.Общие положения проведения стимулирующей Акции «Остров сокровищ»:
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        1.1 Наименование Акции: «Ёлочка сокровищ».
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        1.2 Организатор Акции: Общество с ограниченной ответственностью
        «Евроритейл» (далее по тексту настоящих Правил - «Организатор»).
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        1.3 Территория проведения Акции - Россия, Калининградская область
      </Text>

      <Text mb="16px" fontSize="17px" lineHeight="22px" color="#fff">
        1.4 Наименование Организатора.
      </Text>
    </LayoutMobile.Content>
  </LayoutMobile>
)
