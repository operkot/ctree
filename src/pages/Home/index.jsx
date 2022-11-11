import { Fragment } from 'react'
import useMatchMedia from 'react-use-match-media'

import { usePopupState } from 'hooks/usePopupState'
import { useUserFirstVisit } from 'hooks/useUserFirstVisit'
import { useCouponCountManager } from 'hooks/useCouponCountManager'

import { PopupReminder, PopupRules } from 'ui/organisms'
import { HomeDesktop } from './HomeDesktop'
import { HomeMobile } from './HomeMobile'
import { useEffect } from 'react'

export const Home = () => {
  const { coupons, chips } = useCouponCountManager()
  const isWideViewport = useMatchMedia('(min-width: 1200px)')
  const {
    isOpen: isRulesPopupOpen,
    onOpen: onRulesPopupOpen,
    onClose: onRulesPopupClose,
  } = usePopupState()
  const {
    isOpen: isReminderPopupOpen,
    onOpen: onReminderPopupOpen,
    onClose: onReminderPopupClose,
  } = usePopupState()
  const { isFirstVisit } = useUserFirstVisit(onRulesPopupOpen)

  useEffect(() => {
    if ((coupons > 0 || chips > 0) && !isFirstVisit) {
      onReminderPopupOpen()
    }
  }, [chips, coupons])

  const rulesPopupCloseHandler = () => {
    onRulesPopupClose()

    if (coupons > 0 || chips > 0) {
      onReminderPopupOpen()
    }
  }

  return (
    <Fragment>
      {isWideViewport ? <HomeDesktop /> : <HomeMobile />}

      <PopupRules
        isOpened={isRulesPopupOpen}
        onClose={rulesPopupCloseHandler}
      />
      <PopupReminder
        chips={chips}
        coupons={coupons}
        isOpened={isReminderPopupOpen}
        onClose={onReminderPopupClose}
      />
    </Fragment>
  )
}
