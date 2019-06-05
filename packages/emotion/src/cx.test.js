/** @jsx jsx */
import { jsx } from '@emotion/core'
import 'jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { css, cx } from '.'

describe('#cx', () => {
  it('handles css values', () => {
    const { container } = render(
      <div
        css={cx(
          css`
            margin: 2;
            padding: 1;
            margin-top: 2px;
          `,
        )}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      margin-top: 2px;
      padding: 4px;
    `)
  })

  it('handles multiple css values', () => {
    const { container } = render(
      <div
        css={cx([
          css`
            margin: 2;
          `,
          css`
            padding: 1;
          `,
        ])}
      />,
    )
    expect(container.firstChild).toHaveStyle(`
      margin: 8px;
      padding: 4px;
    `)
  })
})
