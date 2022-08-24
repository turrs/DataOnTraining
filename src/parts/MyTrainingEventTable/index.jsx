import { LabelSection, TableData } from '../../Components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const MyTrainingEventTable = ({ dataTable, columns }) => {
  const { t } = useTranslation(['dashboard']);
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <LabelSection
        label={t('myTrainingEvent')}
        data-testid="label"
        dataBadge={5}
        style={{
          backgroundColor: '#e7e7e7',
          color: '#2db7f5',
          fontWeight: 'bold'
        }}
      />
      <div className="overflow-x-auto">
        <TableData
          data-testid="table"
          dataTable={dataTable}
          pagination={{ defaultPageSize: 2 }}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default MyTrainingEventTable;

MyTrainingEventTable.propTypes = {
  dataTable: PropTypes.array,
  columns: PropTypes.array
};
