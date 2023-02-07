import { render, screen, fireEvent } from '@testing-library/react';
import { CapsuleCard } from '../components';

describe('CapsuleCard', () => {
    const capsule = {
        id: 1,
        serial: 'C101',
        type: 'Dragon 1.0',
        status: 'retired',
        last_update: 'Hanging in atrium at SpaceX HQ in Hawthorne',
    };

    it('should render capsule card with correct information', () => {

        render(<CapsuleCard {...capsule} />)

        const capsuleCard = screen.getByTestId(`capsule-${capsule.id}`)
        //Card rendered successfully
        expect(capsuleCard).toBeInTheDocument()

        //serial available
        expect(screen.getByText(capsule.serial)).toBeInTheDocument()

        //type available
        expect(screen.getByText(capsule.type)).toBeInTheDocument()

        //status available
        expect(screen.getByText(capsule.status)).toBeInTheDocument()

        //last update available
        expect(screen.getByText(`${capsule.last_update.slice(0, 35)}...`)).toBeInTheDocument()

    });

    it('should call handleClick on click', () => {
        const handleClick = jest.fn()
        render(<CapsuleCard {...capsule} handleClick={handleClick} />)

        //click on the card
        fireEvent.click(screen.getByTestId('capsule-1'));
        expect(handleClick).toHaveBeenCalled()

    });

})