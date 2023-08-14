import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel, { CarouselProps} from './Carousel';

const items = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>
];

const mockProps = {
    items: items,
    itemWidth: 300,
};

const customRender = (props: CarouselProps) => render(<Carousel {...props} />);

describe('Carousel', () => {
    test('should render snapshot', () => {
        const { asFragment } = customRender({ ...mockProps });
        
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders items passed to it', () => {
        customRender({...mockProps})
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    test('handles next and previous actions', () => {
        customRender({...mockProps})

        const leftArrowButton = screen.getByTestId('left-arrow');
        const rightArrowButton = screen.getByTestId('right-arrow');

        expect(leftArrowButton).toBeDisabled();

        fireEvent.click(rightArrowButton);

        expect(leftArrowButton).toBeEnabled();

        fireEvent.click(leftArrowButton);

        expect(leftArrowButton).toBeDisabled();
    });

});