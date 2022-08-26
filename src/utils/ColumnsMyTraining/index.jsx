import { Rate } from 'antd';
import { Link } from 'react-router-dom';

import CoverDate from '../CoverDate';

const ColumnsMyTraining = [
  {
    title: 'EventName',
    dataIndex: 'eventName',
    key: 'eventName',
    sorter: (a, b) => a.eventName.localeCompare(b.eventName),
    render: (eventName, record) => <Link to={`/mytraining/${record.id}`}>{eventName}</Link>
  },
  {
    title: 'EventName',
    dataIndex: 'eventName',
    key: 'eventName',
    sorter: (a, b) => a.eventName.localeCompare(b.eventName)
  },
  {
    title: 'Training Type',
    dataIndex: 'isOnline',
    key: 'eventType',

    render: (text) => {
      return <span>{text ? 'Online Class' : 'Offline Class'}</span>;
    }
  },
  {
    title: 'Event Period',
    dataIndex: 'startDate',
    key: 'eventPeriod',
    sorter: (a, b) => new Date(a.startdate) - new Date(b.StartDate),
    render: CoverDate
  },
  {
    title: 'Trainer Name',
    dataIndex: 'trainer',
    key: 'trainer',
    sorter: (a, b) => a.trainer.localeCompare(b.trainer)
  },
  {
    title: 'Ratings',
    dataIndex: 'ratings',
    key: 'ratings',
    sorter: (a, b) => a.ratings - b.ratings,
    render: (ratings) => <Rate disabled allowHalf defaultValue={0} value={ratings}></Rate>
  },
  {
    title: 'Additional Info',
    dataIndex: 'additionalInfo',
    key: 'additionalInfo',
    sorter: (a, b) => a.additionalInfo.localeCompare(b.additionalInfo)
  }
];

export default ColumnsMyTraining;
