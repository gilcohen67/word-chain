import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import useGlobalContext from '../src/GlobalContext';

const columns = [
  { field: 'id', headerName: 'Rank', width: 80 },
  { field: 'username', headerName: 'Username', width: 130 },
  {
    field: 'moves',
    headerName: 'Moves',
    type: 'number',
    width: 70,
  },
];

export default function LeaderBoard() {
  const { leaderboard, setLeaderboard } = useGlobalContext();
  useEffect(() => {
    axios.get('/api/leaderboards')
      .then(({ data }) => {
        console.log(data);
        setLeaderboard(data);
      })
      .catch(err => {
        console.log(err);
        setLeaderboard(null);
      })
  }, [setLeaderboard]);
  return (
    <div style={{ height: 370.5, width: 312 }}>
      {leaderboard && <DataGrid
        rows={
          leaderboard.length ?
            leaderboard.sort((a, b) => {
              return a.moves.N - b.moves.N;
            }).map((item, idx) => {
              return {
                id: idx + 1,
                username: item.username.S,
                moves: item.moves.N
              }
            }) :
            []
        }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />}
    </div>
  );
}