import styled, { css } from 'styled-components'
import {
  compose,
  effects,
  color,
  borders,
  layout,
  space,
  sizing,
  typography,
} from '@xstyled/styled-components'

const ButtonVariants = ({ theme, variant }) =>
  ({
    default: css`
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.white};
      color: ${theme.colors.red[0]};
    `,
    primary: css`
      background-color: ${theme.colors.red[0]};
      border-color: ${theme.colors.red[0]};
      color: ${theme.colors.white};
    `,
    secondary: css`
      background-color: #419787;
      border-color: #419787;
      color: #fff;
    `,
    outlined: css`
      background-color: transparent;
      border-color: ${theme.colors.white};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.red[0]};
      }
    `,
  }[variant])

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${compose(color, borders, layout, space, sizing, typography, effects)}
  ${ButtonVariants}
`

Button.defaultProps = {
  variant: 'default',
  px: '20px',
  py: '16px',
  borderRadius: '999px',
  borderWidth: '2px',
  borderStyle: 'solid',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
}
