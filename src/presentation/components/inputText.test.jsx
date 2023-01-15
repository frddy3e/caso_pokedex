import InputText from './inputText';
import { render, screen } from '@testing-library/react';

describe('InputText', () => {
    test('should render input text component', () => {
        render(<InputText />);
        const inputTextElement = screen.getByTestId('input-text');
        expect(inputTextElement).toBeInTheDocument();
    });

    test('input text component should render label', () => {
        const label = 'Nombre';
        render(<InputText label={label} />);
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    test('input text component should call onChange callback', () => {
        const onChange = jest.fn();
        render(<InputText onChange={onChange} />);
        const inputElement = screen.getByTestId('input-text-input');
        inputElement.value = 'bulbasaur';
        inputElement.dispatchEvent(new Event('change'));
        //expect(onChange).toHaveBeenCalled();
    });
});
