import Slider from './slider';
import { render, screen } from '@testing-library/react';

describe('Slider', () => {
    test('should render slider component', () => {
        render(<Slider />);
        const sliderElement = screen.getByTestId('slider');
        expect(sliderElement).toBeInTheDocument();
    });

});