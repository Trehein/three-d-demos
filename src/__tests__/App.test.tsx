import { render, screen } from '@testing-library/react'
// import { userEvent } from '@vitest/browser/context'
import { expect, test } from 'vitest'
import App from '../App'

test('App component', () => {
  render(<App />)

  const text = screen.getByText('Test')
  expect(text).toBeVisible()
})