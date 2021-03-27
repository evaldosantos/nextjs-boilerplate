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
        <main>
          <h1>
            React Boilerplate
          </h1>
        </main>
      </div>
    `)
  })
})
