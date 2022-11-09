import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import { MODAL_ANIMATION_TIME } from 'constants/modal'

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &.overlay-enter {
    opacity: 0;
  }

  &.overlay-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-out;
  }

  &.overlay-exit {
    opacity: 1;
  }

  &.overlay-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
`

const PopupContent = styled.div`
  position: relative;
  z-index: 2;

  &.content-enter {
    opacity: 0;
    transform: scale(0.8);
  }

  &.content-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 100ms ease-out 200ms, transform 100ms ease-out 200ms;
  }

  &.content-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.content-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 300ms ease-out, transform 300ms ease-out;
  }
`

const overlayAnimationsClass = {
  enter: 'overlay-enter',
  enterActive: 'overlay-enter-active',
  exit: 'overlay-exit',
  exitActive: 'overlay-exit-active',
}

const contentAnimationsClass = {
  enter: 'content-enter',
  enterActive: 'content-enter-active',
  exit: 'content-exit',
  exitActive: 'content-exit-active',
}

export const PopupLayout = ({ children, isOpened, onClose }) => {
  const [animationIn, setAnimationIn] = useState(false)
  const overlayRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    setAnimationIn(isOpened)
  }, [isOpened])

  return (
    <PopupContainer role="dialog">
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={MODAL_ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimationsClass}
      >
        <PopupOverlay
          ref={overlayRef}
          role="button"
          tabIndex={0}
          onClick={onClose}
        />
      </CSSTransition>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={MODAL_ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimationsClass}
      >
        <PopupContent ref={contentRef}>{children}</PopupContent>
      </CSSTransition>
    </PopupContainer>
  )
}
