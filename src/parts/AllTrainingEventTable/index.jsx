import { LabelSection, TableData } from '../../Components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const AllTrainingEventTable = ({ dataTable, columns }) => {
  const { t } = useTranslation(['dashboard']);
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <LabelSection
        label={t('allTrainingEvent')}
        dataBadge={5}
        style={{
          backgroundColor: '#e7e7e7',
          color: '#2db7f5',
          fontWeight: 'bold'
        }}></LabelSection>
      <div className="overflow-x-auto">
        <TableData
          dataTable={dataTable}
          pagination={{ defaultPageSize: 10 }}
          columns={columns}></TableData>
      </div>
    </div>
  );
};

export default AllTrainingEventTable;

AllTrainingEventTable.propTypes = {
  dataTable: PropTypes.array,
  columns: PropTypes.array
};
