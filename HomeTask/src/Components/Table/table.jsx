import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const Tables = ({ netIncomes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Numero</th>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Tables.propTypes = {
  netIncomes: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      income: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Tables;
