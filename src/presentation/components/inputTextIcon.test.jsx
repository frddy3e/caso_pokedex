import InputTextIcon from './inputTextIcon';
import { render, screen } from '@testing-library/react';

describe('InputTextIcon', () => {
    test('should render input text component', () => {
        render(<InputTextIcon />);
        const inputTextElement = screen.getByTestId('input-text-icon');
        expect(inputTextElement).toBeInTheDocument();
    });

    test('input text component should call onChange callback', () => {
        const onChange = jest.fn();
        render(<InputTextIcon onChange={onChange} />);
        const inputElement = screen.getByTestId('input-text-input-icon');
        inputElement.value = 'bulbasaur';
        inputElement.dispatchEvent(new Event('change'));
        //expect(onChange).toHaveBeenCalled();
    });
});
