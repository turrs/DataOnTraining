import { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SectionHeader } from '../../components';
import { AppContext } from '../../context';
import { FormTrainingEvent } from '../../parts';

const EditEvent = () => {
  const { GetDetailDataTraining, dataDetail } = useContext(AppContext);
  const params = useParams();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const path = pathSnippets[0];
  const id = JSON.parse(localStorage.getItem('id'));
  useEffect(() => {
    if (path === 'mytraining') {
      GetDetailDataTraining(path, params.id, id);
    }
    if (path === 'training') {
      GetDetailDataTraining(path, params.id, id);
    }
  }, [location, params]);

  return (
    <div>
      <SectionHeader />
      <div>
        <FormTrainingEvent dataEdit={dataDetail} path={path} params={params.id} id={id} />
      </div>
    </div>
  );
};

export default EditEvent;
