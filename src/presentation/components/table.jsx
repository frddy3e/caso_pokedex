import React from "react";
import PropTypes from "prop-types";

import tableStyle from "./table.module.css";

/**
 * A component that renders a table, with a header and a body. If no rows are provided, a single row with a message is rendered.
 * @component
 * @example
 * const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
 * const rows = [];
 * return (
 *  <Table headers={headers} rows={rows} />
 * )
 */
const Table = (props) => {
  const { headers, rows } = props;

  return (
    <div data-testid="table" className="table_container">
      <table className={tableStyle.table}>
        <thead data-testid="table-header">
          <tr data-testid="table-header-row">
            {headers.map((header, index) => (
              <th key={index} className={tableStyle.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody data-testid="table-body" className={tableStyle.td}>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <tr data-testid="table-body-row" key={index}>
                {row.map((cell, index) => (
                  <td key={index} className={tableStyle.td}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr data-testid="table-body-row">
              <td colSpan={headers.length} className={tableStyle.td}>
                No hay datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  /**
   * The table headers
   */
  headers: PropTypes.array.isRequired,
  /**
   * The table rows
   */
  rows: PropTypes.array.isRequired,
};

Table.defaultProps = {
  headers: [],
  rows: [],
};

export default Table;
