import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument()

    expect(container).toMatchInlineSnapshot(`
      <div>
        <main
          class="styles__Wrapper-sc-19t6oi2-0 fSRjTo"
        >
          <img
            alt="React Boilerplate Logo"
            class="styles__Logo-sc-19t6oi2-1 klGhdy"
            src="/img/logo.svg"
          />
          <h1
            class="styles__Title-sc-19t6oi2-2 lduiBl"
          >
            React Boilerplate
          </h1>
          <h2
            class="styles__Description-sc-19t6oi2-3"
          >
            TypeScript, ReactJS, NextJS e Styled Components
          </h2>
        </main>
      </div>
    `)
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
