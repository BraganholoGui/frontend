import HeaderContent from '../../../components/HeaderContent';
import { Container } from './style';
import { People } from '@mui/icons-material';
import ListContent from '../../../components/ListContent';
import { get } from '../../../services/actions';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as S from './style';
import EditDelete from '../../../components/Form/EditDelete';

function UserList() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = `/users`
  const location = useLocation();

  async function loadData() {
    await get(url)
      .then(async response => {
        if (response) {
          setData(response.records);
        }
      });

  }

  const columns = [
    {
      name: 'ID',
      selector: row => <S.Row href={`users/${row.id}`}>{row.id}</S.Row>,
      sortable: true,
      center: true
    },
    {
      name: 'Nome de Acesso',
      selector: row => <S.Row href={`users/${row.id}`}>{row.access_name}</S.Row>,
      sortable: true,
    },
    {
      name: 'Nome',
      selector: row => <S.Row href={`users/${row.id}`}>{row.Person.name}</S.Row>,
      sortable: true,
    },
    {
      name: 'Cargo',
      selector: row => <S.Row href={`users/${row.id}`}>{row.Role ? row.Role.name : '-'}</S.Row>,
      sortable: true,
    },
    {
      name: 'Times',
      selector: row => <S.Row href={`users/${row.id}`}>
        {row.TeamUsers ?
          <>
            {row.TeamUsers.map(item => {
              return (
                <>
                  - {item.Team.name}<br></br>
                </>
              )
            })}
          </>
          : '-'}
      </S.Row>,
      sortable: true,
    },
    {
      name: 'Editar/Deletar',
      selector: row => <EditDelete id={row.id} url={url} data={data} setData={setData} />,
      center: true,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      },
    },
  ];

  const customStyles = {
    table: {
      style: {
        border: '1px solid black',
      },
    },
    rows: {
      style: {
        minHeight: '72px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  };

  useEffect(() => {
    loadData();
  }, [])

  return (
    <Container>
      <HeaderContent title="Usuários" icon={<People fontSize="large" />} titleButton="Novo Usuário" linkTo="/users/novo" />
      <ListContent
        columns={columns}
        data={data}
        customStyles={customStyles}
      />

    </Container>
  )

}

export default UserList;
