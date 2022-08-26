import { ButtonIcon, SelectBox, Toggle, TextInput } from '../../components';
import './index.css';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useContext, useCallback } from 'react';
import { AppContext } from '../../context';
import { useTranslation } from 'react-i18next';

const FilterTrainingEvent = () => {
  const { t } = useTranslation(['dashboard']);
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
    setEventType('');
    setEventStatus('');
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
    <div className="bg-card rounded-[10px] p-5 m-5 sm:flex sm:flex-row">
      <div className="basis-1/4">
        <TextInput
          type="search"
          label={t('search.label')}
          placeholder={t('search.placeholder')}
          style={{ width: 230, borderRadius: 5 }}
          onChange={(value) => debounceFunc(value.target.value)}
        />
      </div>
      <div className="basis-1/4">
        <SelectBox
          type="event"
          style={{ width: 230 }}
          onChange={eventChange}
          value={eventType}></SelectBox>
      </div>
      <div className="basis-1/4">
        <SelectBox
          type="status"
          style={{ width: 230 }}
          onChange={statusChange}
          value={eventStatus}></SelectBox>
      </div>
      <div className="basis-1/4 sm:flex sm:flex-row">
        <div className="switch">
          <Toggle label={t('related')}></Toggle>
        </div>
        <div className="wrapperButton">
          <ButtonIcon
            textButton={view ? t('buttonView.part2') : t('buttonView.part1')}
            style={{ borderRadius: 5, width: 200 }}
            icon={view ? <UnorderedListOutlined /> : <AppstoreOutlined />}
            onClick={view ? onClickAsList : onClickAsCard}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTrainingEvent;
