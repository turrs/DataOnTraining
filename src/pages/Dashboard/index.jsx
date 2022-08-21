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
    valueInputSearching
  } = useContext(AppContext);
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  useEffect(() => {
    setUser(userInfo);
  }, []);
  useEffect(() => {
    GetDataSearching(valueInputSearching);
  }, [valueInputSearching]);
  return (
    <div>
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
