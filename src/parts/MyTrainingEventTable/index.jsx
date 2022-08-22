import { LabelSection, TableData } from '../../Components';
import PropTypes from 'prop-types';
const MyTrainingEventTable = ({ dataTable, columns }) => {
  return (
    <div className="site-card-wrapper">
      <LabelSection
        label="My Training Event"
        data-testid="label"
        dataBadge={50}
        style={{
          backgroundColor: '#e7e7e7',
          color: '#2db7f5',
          fontWeight: 'bold'
        }}
      />
      <TableData
        data-testid="table"
        dataTable={dataTable}
        pagination={{ defaultPageSize: 2 }}
        columns={columns}
      />
    </div>
  );
};

export default MyTrainingEventTable;

MyTrainingEventTable.propTypes = {
  dataTable: PropTypes.array,
  columns: PropTypes.array
};
