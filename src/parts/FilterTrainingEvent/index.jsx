import { ButtonIcon, SelectBox, Toggle, TextInput } from '../../Components';
import './index.css';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useContext, useCallback } from 'react';
import { AppContext } from '../../Context';
const FilterTrainingEvent = () => {
  const {
    view,
    setView,
    setValueInputSearching,
    debounce,
    eventType,
    setEventType,
    eventStatus,
    setEventStatus
  } = useContext(AppContext);
  const onClickAsCard = () => {
    setView(true);
  };
  const onClickAsList = () => {
    setView(false);
  };

  const onChangeSearching = (value) => {
    setEventStatus('');
    setEventType('');
    setValueInputSearching(value);
  };
  const eventChange = (value) => {
    setValueInputSearching('');
    setEventStatus('');
    setEventType(value);
  };
  const statusChange = (value) => {
    setValueInputSearching('');
    setEventType('');
    setEventStatus(value);
  };
  const debounceFunc = useCallback(debounce(onChangeSearching, 1000), []);
  return (
    <div className="container-gridd">
      <TextInput
        type="search"
        label="Search Training"
        placeholder="Search Training"
        style={{ width: 230, borderRadius: 5 }}
        onChange={(value) => debounceFunc(value.target.value)}
        dataTestId="inputSearch"
      />
      <SelectBox
        type="event"
        style={{ width: 230 }}
        onChange={eventChange}
        value={eventType}
        dataTestId="selectEvent"></SelectBox>
      <SelectBox
        type="status"
        style={{ width: 230 }}
        onChange={statusChange}
        value={eventStatus}
        dataTestId="selectStatus"></SelectBox>
      <div className="switch">
        <Toggle dataTestId="switch" label="Related Job Only"></Toggle>
      </div>
      <div className="wrapperButton">
        <ButtonIcon
          dataTestId="button"
          textButton={view ? 'View All List' : 'View as Card'}
          style={{ borderRadius: 5, width: 200 }}
          icon={view ? <UnorderedListOutlined /> : <AppstoreOutlined />}
          onClick={view ? onClickAsList : onClickAsCard}
        />
      </div>
    </div>
  );
};

export default FilterTrainingEvent;
