import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {SearchCard} from '../components'

describe('SearchCard', () => {
    const capsule = {
        id: 1,
        serial: 'C101',
        type: 'Dragon 1.0',
        status: 'retired',
        last_update: 'Hanging in atrium at SpaceX HQ in Hawthorne',
    };

  it('renders correctly', () => {
    render(
        <SearchCard {...capsule} handleClick={jest.fn()} />
      )

    //card is rendered
    const searchCard = screen.getByTestId('capsule-1')
    expect(searchCard).toBeInTheDocument()

    //Checking Serial is available
    expect(screen.getByText(/C101/i)).toBeInTheDocument()

    //Checking Status is available
    expect(screen.getByText(capsule.status)).toBeInTheDocument()

    //Checking Type is available
    expect(screen.getByText(capsule.type)).toBeInTheDocument()
    
    //Checking Last Update is available
    expect(screen.getByText(capsule.last_update)).toBeInTheDocument()
  })

  it('calls handleClick function on click', () => {
    const handleClick = jest.fn()
    render(
        <SearchCard {...capsule} handleClick={handleClick} />
      )
      
    fireEvent.click(screen.getByTestId('capsule-1'))
    expect(handleClick).toHaveBeenCalled()
  })
})
