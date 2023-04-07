import { useState } from 'react';
import { useEffect } from 'react';
import * as S from './style';
import { put, post} from '../../../services/actions'
import { useHistory, useParams } from 'react-router-dom';
import {toast} from '../../../GeneralFunctions/functions'

function ButtonSave(props) {
  const {id} = useParams();
  const [url, setUrl] = useState('');
  const [obj, setObj] = useState('');
  const history = useHistory()

  useEffect(() => {
    setUrl(props.url)
    setObj(props.obj)
  }, [props])

  function handleSubmit(url) {
    console.log(obj)
    if (id != 'novo') {
      put(`${url}/${id}`, obj)
        .then(() => {
          toast('success',`Atualizado com sucesso!`);
          // history.goBack()
        }).catch((err) => {
          toast('error', err.reason || `Error ao atualizar o registro :(`);
        });
    } else {
      post(url, obj)
        .then(() => {
          toast('success',`Salvo com sucesso!`);
          history.goBack()
        }).catch((err) => {
          toast('error', err.reason || `Error ao salvar o registro :(`);
        });
    }
  }
  
  return (
     <S.ButtonSave  onClick={() => handleSubmit(url)} >
      SALVAR  
     </S.ButtonSave>
  )

}

export default ButtonSave;
