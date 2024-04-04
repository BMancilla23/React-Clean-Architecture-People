
import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IPeopleTableProps {

}

const PeopleTable: React.FC<IPeopleTableProps> = (props) => {

  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();
  
  const statePeople = useSelector((store: AppStore) => store.people)
  const favoritePeople = useSelector((store: AppStore) => store.favorites)

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) => {
    return favoritePeople.filter((p) => p.id !== person.id)
  }

  const handleChange = (person: Person) => {
    const isSelected = findPerson(person)

    const updatedPeople = isSelected ? filterPerson(person) : [...selectedPeople, person]

    setSelectedPeople(updatedPeople); // Actualiza el estado antes de enviar al dispatch
    dispatch(addFavorite(updatedPeople)); // Envía solo la persona actualizada al dispatch
  };

  const columns = [
    {
      field: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={!!findPerson(params.row)}
              onChange={() => handleChange(params.row)} // Pasa el objeto de la persona en la que se hizo clic
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "LevelOfHappiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
      },
  ];

  useEffect(() => {
    setSelectedPeople(favoritePeople)
  }, [favoritePeople])

  return <>
    <section>
      <DataGrid
        rows={statePeople}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize },
          },
        }}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={[5, 10]}
        getRowId={(row) => row.id}
      />
    </section>
  </>
}

export default PeopleTable;
