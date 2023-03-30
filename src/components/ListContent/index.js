import * as S from './style';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';

function ListContent(props) {
  const [data, setData] = useState(props.data);
  const [columns, setColumns] = useState(props.columns);

  useEffect(() => {
    setData(props.data);
    setColumns(props.columns);
  }, [props.data, props.columns]);

  const customStyles = {
    all:{
      borderRadius: '20px',
    },
    table: {
      style: {
        borderTop: '2px solid rgb(	17, 91, 76, 0.3)',
        borderLeft: '2px solid rgb(	17, 91, 76, 0.3)',
        borderRight: '2px solid rgb(	17, 91, 76, 0.5)',
        borderBottom: '2px solid rgb(	17, 91, 76, 0.5)',
        borderRadius: '20px',
      },
    },
    rows: {
      style: {
        borderRadius: '20px',
      },
    },
    headRow: {
      style: {
        borderRadius: '20px',
        borderBottom: '2px solid rgb(	17, 91, 76, 0.5)',
      },
    },
    headCells: {
      style: {
        borderRadius: '20px',
        borderRight: '2px solid rgb(	17, 91, 76, 0.5)',
        fontWeight:700,
        fontSize:'15px'
      },
    },
    noData: {
      style: {
        borderRadius: '20px',
        padding:'24px'
      },
    },
    cells: {
      style: {
        borderRadius: '20px',
        borderRight: '2px solid rgb(	17, 91, 76, 0.3)',
        borderBottom: '2px solid rgb(	17, 91, 76, 0.3)',

      },
    },
  };
  return (
    <S.ContainerMain>
      <S.Box>
        <DataTable
          data={data}
          columns={columns}
          customStyles={customStyles}
          subHeaderAlign={'left'}
          pagination
          highlightOnHover
          noDataComponent={"Não há cadastros!"}
          striped
        />
      </S.Box>
    </S.ContainerMain>
  )

}

export default ListContent;
