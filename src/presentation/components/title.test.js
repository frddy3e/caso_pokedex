import {render, screen} from '@testing-library/react';
import Title from './title';

describe('Title', () => {
    it('should render title', () => {
        render(<Title title="Nuevo Pokemon" />);
        const titleElement = screen.getByTestId('title');
        expect(titleElement).toBeInTheDocument();
    });
    
});