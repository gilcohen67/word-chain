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

const rows = [
  { id: 1, username: 'Jon', moves: 35 },
  { id: 2, username: 'Cersei', moves: 42 },
  { id: 3, username: 'Jaime', moves: 45 },
  { id: 4, username: 'Arya', moves: 16 },
  { id: 5, username: 'Daenerysasdkjfh gaksjd fhg', moves: null },
  { id: 6, username: null, moves: 150 },
  { id: 7, username: 'Ferrara', moves: 44 },
  { id: 8, username: 'Rossini', moves: 36 },
  { id: 9, username: 'Harvey', moves: 65 },
];

export default function LeaderBoard() {
  const { leaderboard, setLeaderboard } = useGlobalContext();
  useEffect(() => {
    // get leaderBoards
    axios.get('http://localhost:8080/leaderboards')
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
    <div style={{ height: 370.5, width: 312, marginTop: 30 }}>
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