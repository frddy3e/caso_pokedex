import Button from './button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('should render button component', () => {
        render(<Button />);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('button component simulate click', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}/>);
        const buttonElement = screen.getByTestId('button');
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });
});