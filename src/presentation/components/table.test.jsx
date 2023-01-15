import {render, screen} from '@testing-library/react';
import Table from './table';

describe('Table', () => {
    test('should render table component', () => {
        render(<Table />);
        const quoteListElement = screen.getByTestId('table');
        expect(quoteListElement).toBeInTheDocument();
    });

    test('table header should contain 5 columns', () => {
        const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
        render(<Table headers={headers}/>);
        const tableHeaderElement = screen.getByTestId('table-header-row');
        expect(tableHeaderElement.children.length).toBe(5);
    });

    test('empty table should contain a single row with message', () => {
        const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
        const rows = [];
        render(<Table headers={headers} rows={rows}/>);
        const tableBodyElement = screen.getByTestId('table-body-row');
        expect(tableBodyElement.children.length).toBe(1);
        expect(tableBodyElement.children[0].textContent).toBe('No hay datos');
    })
});