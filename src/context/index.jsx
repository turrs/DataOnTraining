import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Axios, ColumnsAllTraining, ColumnsMyTraining, Role, Token } from '../Utils';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Notification } from '../Components';
export const AppContext = createContext(null);

export const ContextWrapper = ({ children }) => {
  const token = Token();
  const role = Role();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const params = useParams();
  // const [params]
  const [user, setUser] = useState();
  const [AllTrainingTableColumnContext] = useState(ColumnsAllTraining);
  const [MyTrainingTableColumnContext] = useState(ColumnsMyTraining);
  // for toggle switch view
  const [view, setView] = useState(false);

  // for get data all training
  const [DataAllTrainings, setDataAllTrainings] = useState([]);
  const GetAllTraining = async () => {
    const response = await Axios.get('/trainings');
    setDataAllTrainings(response.data);
  };

  // for get data my training
  const [DataMyTraining, setDataMyTraining] = useState([]);
  const GetMyTraining = async (id) => {
    const response = await Axios.get(`/users/${id}/trainings`);
    setDataMyTraining(response.data);
  };

  // for create data training
  const CreateDataTraining = async (data) => {
    try {
      var messages = 'Event successfully created';
      const response = await Axios.post('/trainings', data);
      Notification(messages, 'success');
    } catch (error) {
      Notification(error.message, 'warn');
    }
  };

  // for edit data training
  const EditDataTraining = async (dataEdit, path, params, id) => {
    try {
      if (path === 'mytraining') {
        var messages = 'Event successfully Update';
        const response = await Axios.put(`users/${id}/trainings/${params}`, dataEdit);
        console.log(21421, response);
        Notification(messages, 'success');
      }
      if (path === 'training') {
        var messages = 'Event successfully Update';
        const response = await Axios.put(`users/trainings/${params}`, dataEdit);
        Notification(messages, 'success');
      }
    } catch (error) {
      console.log('kok erorr get detail', error);
    }
  };

  // for searching input filter
  const [valueInputSearching, setValueInputSearching] = useState('');
  // for filter event status
  const [eventStatus, setEventStatus] = useState('');
  // for filter event status
  const [eventType, setEventType] = useState('');
  // get data searching
  // page training
  const [pageMyTrainings, setPageMyTrainings] = useState(1);
  const [pageAllTrainings, setPageAllTrainings] = useState(1);
  const [totalDataMyTrainings, setTotalDataMyTrainings] = useState();
  const [totalDataAllTrainings, setTotalDataAllTrainings] = useState();
  const GetDataSearching = async (valueInputSearching, id, pageMyTrainings, pageAllTrainings) => {
    const endpoints = [
      `/users/${id}/trainings?search=${valueInputSearching}&page${pageMyTrainings}&limit=10`,
      `/trainings?search=${valueInputSearching}&page=${pageAllTrainings}&limit=10`
    ];
    await Promise.all(endpoints.map((endpoint) => Axios.get(endpoint))).then(
      ([{ data: dataUserTraining }, { data: dataAllTraining }]) => {
        setDataAllTrainings(dataAllTraining);
        setDataMyTraining(dataUserTraining);
        setTotalDataMyTrainings(dataUserTraining._metadata.total_count);
        setTotalDataAllTrainings(dataAllTraining._metadata.total_count);
      }
    );
  };
  // for filter select type event
  const GetDataSelectEventType = async (eventType, id, pageMyTrainings, pageAllTrainings) => {
    const endpoints = [
      `/users/${id}/trainings?isOnlineClass=${eventType}&page${pageMyTrainings}&limit=10`,
      `/trainings?isOnlineClass=${eventType}&page=${pageAllTrainings}&limit=10`
    ];
    await Promise.all(endpoints.map((endpoint) => Axios.get(endpoint))).then(
      ([{ data: dataUserTraining }, { data: dataAllTraining }]) => {
        setDataAllTrainings(dataAllTraining);
        setDataMyTraining(dataUserTraining);
        setTotalDataMyTrainings(dataUserTraining._metadata.total_count);
        setTotalDataAllTrainings(dataAllTraining._metadata.total_count);
      }
    );
  };
  const GetDataSelectEventStatus = async (eventStatus, id, pageMyTrainings, pageAllTrainings) => {
    const endpoints = [
      `/users/${id}/trainings?isComplete=${eventStatus}&page${pageMyTrainings}&limit=10`,
      `/trainings?isComplete=${eventStatus}&page=${pageAllTrainings}&limit=10`
    ];
    await Promise.all(endpoints.map((endpoint) => Axios.get(endpoint))).then(
      ([{ data: dataUserTraining }, { data: dataAllTraining }]) => {
        setDataAllTrainings(dataAllTraining);
        setDataMyTraining(dataUserTraining);
        setTotalDataMyTrainings(dataUserTraining._metadata.total_count);
        setTotalDataAllTrainings(dataAllTraining._metadata.total_count);
      }
    );
  };
  // for delete data my training
  const [deleteStatus, setDeleteStatus] = useState(false);
  const DeleteDataMyTraining = async (params, id) => {
    await Axios.delete(`/users/${id}/trainings/${params}`)
      .then((res) => {
        setDeleteStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // for get detail data
  const [userId, setUserId] = useState();
  const [dataDetail, setDataDetail] = useState('');
  const GetDetailDataTraining = async (path, params, id) => {
    try {
      if (path === 'mytraining') {
        const response = await Axios.get(`/users/${id}/trainings/${params}`);
        setDataDetail(response.data);
      }
      if (path === 'training') {
        const response = await Axios.get(`/trainings/${params}`);
        setDataDetail(response.data);
      }
    } catch (error) {
      console.log('kok erorr get detail', error);
    }
  };

  // for search card training
  const [valueCardTraining, setValueCardTraining] = useState('');
  const SearchCardTraining = async (valueCardTraining, id) => {
    const myTraining = await Axios.get(`/users/${id}/trainings?search=${valueCardTraining}`);
    const allTraining = await Axios.get(`/trainings?search=${valueCardTraining}`);

    Promise.all([myTraining, allTraining]).then(
      ([{ data: dataMyTraining }, { data: dataAllTraining }]) => {
        setDataMyTraining(dataMyTraining);
        setDataAllTrainings(dataAllTraining);
        setValueCardTraining(valueCardTraining);
      }
    );
  };

  // debounce
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, delay);
    };
  };

  return (
    <AppContext.Provider
      value={{
        AllTrainingTableColumnContext,
        MyTrainingTableColumnContext,
        view,
        setView,
        GetAllTraining,
        GetMyTraining,
        DataAllTrainings,
        CreateDataTraining,
        DataMyTraining,
        EditDataTraining,
        valueInputSearching,
        setValueInputSearching,
        GetDataSearching,
        deleteStatus,
        setDeleteStatus,
        DeleteDataMyTraining,
        SearchCardTraining,
        valueCardTraining,
        setValueCardTraining,
        debounce,
        eventStatus,
        setEventStatus,
        eventType,
        setEventType,
        GetDataSelectEventType,
        GetDataSelectEventStatus,
        user,
        setUser,
        userId,
        setUserId,
        dataDetail,
        setDataDetail,
        GetDetailDataTraining,
        pageMyTrainings,
        setPageMyTrainings,
        pageAllTrainings,
        setPageAllTrainings,
        totalDataMyTrainings,
        setTotalDataMyTrainings,
        totalDataAllTrainings,
        setTotalDataAllTrainings
      }}>
      {children}
    </AppContext.Provider>
  );
};
ContextWrapper.propTypes = {
  children: PropTypes.object
};
