import { useEffect, useContext } from 'react';
import { SectionHeader } from '../../Components';
import { AppContext } from '../../Context';
import {
  AllTrainingEventCard,
  AllTrainingEventTable,
  FilterTrainingEvent,
  MyTrainingEventCard,
  MyTrainingEventTable
} from '../../parts';

const Dashboard = () => {
  const {
    DataAllTrainings,
    AllTrainingTableColumnContext,
    MyTrainingTableColumnContext,
    DataMyTraining,
    GetDataSearching,
    valueInputSearching,
    GetDataSelectEventType,
    GetDataSelectEventStatus,
    eventType,
    eventStatus,
    view
  } = useContext(AppContext);
  const id = JSON.parse(localStorage.getItem('id'));
  const user = JSON.parse(localStorage.getItem('user-info'));
  useEffect(() => {
    GetDataSearching(valueInputSearching, id);
  }, [valueInputSearching]);
  useEffect(() => {
    GetDataSelectEventType(eventType, id);
  }, [eventType]);
  useEffect(() => {
    GetDataSelectEventStatus(eventStatus, id);
  }, [eventStatus]);
  return (
    <div className="p-5">
      <SectionHeader viewButton user={user} />
      <FilterTrainingEvent />
      {view ? (
        <MyTrainingEventCard item={DataMyTraining} />
      ) : (
        <MyTrainingEventTable
          dataTable={DataMyTraining.data}
          columns={MyTrainingTableColumnContext}
        />
      )}
      {view ? (
        <AllTrainingEventCard item={DataAllTrainings} />
      ) : (
        <AllTrainingEventTable
          dataTable={DataAllTrainings.data}
          columns={AllTrainingTableColumnContext}
        />
      )}
    </div>
  );
};

export default Dashboard;
