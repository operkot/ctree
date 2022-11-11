import { Fragment, useEffect } from 'react'
import useMatchMedia from 'react-use-match-media'

import { WEEKLY_DRAW_REALIZE_FAIL_MESSAGE } from 'constants/messages'

import { usePopupState } from 'hooks/usePopupState'
import { useWeeklyDrawManager } from 'hooks/useWeeklyDrawManager'
import { useCouponCountManager } from 'hooks/useCouponCountManager'

import { PopupAlert } from 'ui/molecules'
import { PopupCodesRealize, PopupCodeRegSuccess } from 'ui/organisms'
import { WeeklyDrawMobile } from './WeeklyDrawMobile'
import { WeeklyDrawDesktop } from './WeeklyDrawDesktop'

export const WeeklyDraw = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')
  const {
    weeklyDrawCodes,
    isLoading,
    error,
    fetchWeeklyCodes,
    realizeWeeklyCodes,
  } = useWeeklyDrawManager()
  const { coupons } = useCouponCountManager()
  const {
    isOpen: isRealizeCouponsPopupOpen,
    onOpen: onRealizeCouponsPopupOpen,
    onClose: onRealizeCouponsPopupClose,
  } = usePopupState()
  const {
    isOpen: isRealizeSuccessPopupOpen,
    onOpen: onRealizeSuccessPopupOpen,
    onClose: onRealizeSuccessPopupClose,
  } = usePopupState()
  const {
    isOpen: isRealizeFailPopupOpen,
    onOpen: onRealizeFailPopupOpen,
    onClose: onRealizeFailPopupClose,
  } = usePopupState()

  useEffect(() => {
    if (coupons > 0) {
      onRealizeCouponsPopupOpen()
    }
  }, [coupons])

  const onCouponsRealize = async () => {
    try {
      const response = await realizeWeeklyCodes().unwrap()

      fetchWeeklyCodes()
      onRealizeCouponsPopupClose()
      onRealizeSuccessPopupOpen()
    } catch (error) {
      onRealizeCouponsPopupClose()
      onRealizeFailPopupOpen()
    }
  }

  return (
    <Fragment>
      {isWideViewport ? (
        <WeeklyDrawDesktop
          weeklyDrawCodes={weeklyDrawCodes}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <WeeklyDrawMobile
          weeklyDrawCodes={weeklyDrawCodes}
          isLoading={isLoading}
          error={error}
        />
      )}
      <PopupCodesRealize
        isOpened={isRealizeCouponsPopupOpen}
        onClose={onRealizeCouponsPopupClose}
        coupons={coupons}
        onCouponsRealize={onCouponsRealize}
      />
      <PopupCodeRegSuccess
        isOpened={isRealizeSuccessPopupOpen}
        onClose={onRealizeSuccessPopupClose}
      />
      <PopupAlert
        message={WEEKLY_DRAW_REALIZE_FAIL_MESSAGE}
        isOpened={isRealizeFailPopupOpen}
        onClose={onRealizeFailPopupClose}
      />
    </Fragment>
  )
}
