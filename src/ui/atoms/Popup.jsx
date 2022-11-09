import { MODAL_ANIMATION_TIME } from 'constants/modal'
import { useMount } from 'hooks/useMount'
import { PopupLayout, Portal } from 'ui/atoms'

export const Popup = ({ children, isOpened, onClose }) => {
  const { mounted } = useMount({
    opened: isOpened,
    timeout: MODAL_ANIMATION_TIME,
  })

  if (!mounted) {
    return null
  }

  return (
    <Portal>
      <PopupLayout isOpened={isOpened} onClose={onClose}>
        {children}
      </PopupLayout>
    </Portal>
  )
}
