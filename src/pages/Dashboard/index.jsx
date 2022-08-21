import { useEffect, useContext } from 'react';
import { SectionHeader } from '../../Components';
import { AppContext } from '../../Context';
import { AllTrainingEventTable, FilterTrainingEvent, MyTrainingEventTable } from '../../parts';

const Dashboard = () => {
  const {
    user,
    setUser,
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
    deleteStatus
  } = useContext(AppContext);
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  useEffect(() => {
    setUser(userInfo);
  }, []);
  useEffect(() => {
    GetDataSearching(valueInputSearching);
  }, [valueInputSearching]);
  useEffect(() => {
    GetDataSelectEventType(eventType);
  }, [deleteStatus, eventType]);
  useEffect(() => {
    GetDataSelectEventStatus(eventStatus);
  }, [deleteStatus, eventStatus]);
  return (
    <div className="p-5">
      <SectionHeader viewButton user={user} />
      <FilterTrainingEvent />
      <MyTrainingEventTable
        dataTable={DataMyTraining.data}
        columns={MyTrainingTableColumnContext}
      />
      <AllTrainingEventTable
        dataTable={DataAllTrainings.data}
        columns={AllTrainingTableColumnContext}
      />
    </div>
  );
};

export default Dashboard;
