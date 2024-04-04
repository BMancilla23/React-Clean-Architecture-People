
import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type FavoriteTableProps = {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableProps> = ({ }) => {
	
	const pageSize = 5;

	const dispatch = useDispatch();
	const stateFavorites = useSelector((store: AppStore) => store.favorites)

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person)); // Envía solo la persona actualizada al dispatch
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
						<IconButton color="inherit" aria-label="delete" onClick={() => handleClick(params.row)}><DeleteIcon /></IconButton>
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


	return <>

		<DataGrid
			rows={stateFavorites}
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
			getRowId={(row: any) => row.id}
		/>

	</>
};

export default FavoriteTable;
