import React, { useEffect, useContext } from 'react';
import { SectionHeader } from '../../components';
import { AppContext } from '../../context';
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
    view,
    pageMyTrainings,
    pageAllTrainings
  } = useContext(AppContext);
  const id = JSON.parse(localStorage.getItem('id'));
  const user = JSON.parse(localStorage.getItem('user-info'));

  useEffect(() => {
    if (valueInputSearching !== '') {
      GetDataSearching(valueInputSearching, id, pageMyTrainings, pageAllTrainings);
    } else if (eventType !== '') {
      console.log('masuk type');
      GetDataSelectEventType(eventType, id, pageMyTrainings, pageAllTrainings);
    } else if (eventStatus !== '') {
      GetDataSelectEventStatus(eventStatus, id, pageMyTrainings, pageAllTrainings);
    } else {
      GetDataSearching(valueInputSearching, id, pageMyTrainings, pageAllTrainings);
    }
  }, [valueInputSearching, eventStatus, eventType, pageMyTrainings, pageAllTrainings]);

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
        <AllTrainingEventCard item={DataAllTrainings}></AllTrainingEventCard>
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
