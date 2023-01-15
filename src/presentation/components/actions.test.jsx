import {render, screen} from '@testing-library/react';
import Actions from './actions';

describe('Actions', () => {
    test('should render actions component', () => {
        render(<Actions />);
        const actionsElement = screen.getByTestId('actions');
        expect(actionsElement).toBeInTheDocument();
    });

    test('actions component should render 2 buttons', () => {
        render(<Actions />);
        const actionsElement = screen.getByTestId('actions');
        expect(actionsElement.children.length).toBe(2);
    });

    test('actions component should call onEdit callback', () => {
        const onEdit = jest.fn();
        render(<Actions onEdit={onEdit}/>);
        const editButton = screen.getByTestId('actions-btn-edit');
        editButton.click();
        expect(onEdit).toHaveBeenCalled();
    });

    test('actions component should call onDelete callback', () => {
        const onDelete = jest.fn();
        render(<Actions onDelete={onDelete}/>);
        const deleteButton = screen.getByTestId('actions-btn-delete');
        deleteButton.click();
        expect(onDelete).toHaveBeenCalled();
    });
});