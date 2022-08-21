import { Table } from 'antd';
import './index.css';
import PropTypes from 'prop-types';
const TableData = ({ pagination, columns, dataTable }) => {
  return (
    <Table
      dataSource={dataTable}
      rowKey={(dataTable) => dataTable.id}
      data-testid="table"
      columns={columns}
      pagination={pagination}
    />
  );
};

TableData.propTypes = {
  pagination: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  dataTable: PropTypes.array
};
TableData.defaultProps = {
  pagination: { defaultPageSize: 2 }
};

export default TableData;
