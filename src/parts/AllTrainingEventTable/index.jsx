import { LabelSection, TableData } from '../../Components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AppContext } from '../../Context';
const AllTrainingEventTable = ({ dataTable, columns }) => {
  const { setPageAllTrainings, totalDataAllTrainings } = useContext(AppContext);
  const { t } = useTranslation(['dashboard']);
  console.log('nih data', dataTable);
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <LabelSection
        label={t('allTrainingEvent')}
        dataBadge={totalDataAllTrainings}
        style={{
          backgroundColor: '#e7e7e7',
          color: '#2db7f5',
          fontWeight: 'bold'
        }}></LabelSection>
      <div className="overflow-x-auto">
        <TableData
          dataTable={dataTable}
          pagination={{
            defaultCurrent: 1,
            PageSize: 10,
            size: 'default',
            total: totalDataAllTrainings,
            onChange: (page) => {
              setPageAllTrainings(page);
            }
          }}
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
