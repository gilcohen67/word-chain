import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Rank', width: 50 },
  { field: 'firstName', headerName: 'Username', width: 130 },
  {
    field: 'moves',
    headerName: 'Moves',
    type: 'number',
    width: 70,
  },
];

const rows = [
  { id: 1, firstName: 'Jon', moves: 35 },
  { id: 2, firstName: 'Cersei', moves: 42 },
  { id: 3, firstName: 'Jaime', moves: 45 },
  { id: 4, firstName: 'Arya', moves: 16 },
  { id: 5, firstName: 'Daenerys', moves: null },
  { id: 6, firstName: null, moves: 150 },
  { id: 7, firstName: 'Ferrara', moves: 44 },
  { id: 8, firstName: 'Rossini', moves: 36 },
  { id: 9, firstName: 'Harvey', moves: 65 },
];

export default function LeaderBoard() {
  return (
    <div style={{ height: 400, width: '45%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}