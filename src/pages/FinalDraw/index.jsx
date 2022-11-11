import { Fragment, useEffect } from 'react'
import useMatchMedia from 'react-use-match-media'

import { usePopupState } from 'hooks/usePopupState'
import { useCouponCountManager } from 'hooks/useCouponCountManager'
import { useFinalDrawManager } from 'hooks/useFinalDrawManager'

import { PopupChipsRealize } from 'ui/organisms'
import { FinalDrawMobile } from './FinalDrawMobile'
import { FinalDrawDesktop } from './FinalDrawDesktop'

export const FinalDraw = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')
  const { chips } = useCouponCountManager()
  const {
    isOpen: isPopupChipsRealizeOpen,
    onOpen: onPopupChipsRealizeOpen,
    onClose: onPopupChipsRealizeClose,
  } = usePopupState()

  const { finalDrawCodes, isLoading, error } = useFinalDrawManager()

  console.log(finalDrawCodes)

  useEffect(() => {
    if (chips > 0) {
      onPopupChipsRealizeOpen()
    }
  }, [chips])

  return (
    <Fragment>
      {isWideViewport ? (
        <FinalDrawDesktop
          finalDrawCodes={finalDrawCodes}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <FinalDrawMobile
          finalDrawCodes={finalDrawCodes}
          isLoading={isLoading}
          error={error}
        />
      )}
      <PopupChipsRealize
        chips={chips}
        isOpened={isPopupChipsRealizeOpen}
        onClose={onPopupChipsRealizeClose}
      />
    </Fragment>
  )
}
