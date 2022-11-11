import { BASE_ERROR_MESSAGE } from 'constants/messages'
import { PopupAlert } from 'ui/molecules'

export const PopupBasicError = ({ isOpened, onClose }) => (
  <PopupAlert
    message={BASE_ERROR_MESSAGE}
    isOpened={isOpened}
    onClose={onClose}
  />
)
