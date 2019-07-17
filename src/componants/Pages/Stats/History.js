import React from 'react';
import SubNavigation from './SubNav';
import styled from 'styled-components';

// const moment = require('moment');

const Wrapper = styled.div`
  margin: 2.5rem 1.25rem
  overflow: hidden;
  border-left: 1px solid lightgrey;
  // overflow-y:hidden;
  @media (max-width: 748px) {
    margin: 2.5rem 0;
  }
`;

const TableWrap = styled.div`
  border: 3px solid lightgrey;
  background-color: #e9edf1;
  padding: 2rem 0;
  column-count: 2;
  -moz-column-count: 2;
  -webkit-column-count: 2;
  @media (max-width: 748px) {
    display: flex;
    width: 100%;
  }
`;
const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  column-count: 2;
  column-gap: 20px;
  border-collapse: collapse;
  @media (max-width: 748px) {
    width: 90%;
  }
`;
const TableRow = styled.tr`
  font-family: BurbankBigCondensed-black;
  color: white;
  // font-size: 1.5rem;
  border-bottom: 20px solid #e9edf1;
  opacity: 0.7;

  &.firstTable {
    background-color: #292929;
  }
  &.secondTable {
    background-color: #292929;
  }
  > td {
    padding: 0.3rem;
    // border-radius: 10px;
  }
`;
const History = ({ history }) => {
  const tableResult =
    history &&
    history.map((data, key) => {
      // const dateFormat = () => {
        //     'TODO',
        //     data.dateCollected.split('T')[0].split('-')[0],
        //     data.dateCollected.split('T')[0].split('-')[1],
        //     data.dateCollected.split('T')[0].split('-')[2]
        // );
        // const year = data.dateCollected.split('T')[0].split('-')[0];
        // var day = moment(data.dateCollected._d[1]);
      // };
      const topKeys = () => {
        const { top1, top5, top10, top25 } = data;
        if (top1 > 0) {
          return <span style={{ color: 'gold' }}>Won</span>;
        } else if (top5 > 0) {
          return <span style={{ color: 'green' }}>Top 5</span>;
        } else if (top10 > 0) {
          return <span style={{ color: 'orange' }}>Top 10</span>;
        } else if (top25 > 0) {
          return <span style={{ color: 'yellow' }}>Top 25</span>;
        }
      };

      const gameMode = () => {
        const { playlist } = data;
        if (playlist === "p2") {
          return (
            <p>Solo</p>
          )
        }
        if (playlist === "p9") {
          return (
            <p>Duo</p>
          )
        }
        if (playlist === "p10") {
          return (
            <p>Squad</p>
          )
        }
      }
      if (key < 10) {
        return (
          <TableRow className="firstTable" key={key}>
            <td>{gameMode() ? gameMode(): 'N/A'}</td>
            <td>Matches: {data.matches}</td>
            <td>{data.dateCollected.split('T')[0]}</td>
            <td>Kills: {data.kills}</td>
            <td>{topKeys() ? topKeys() : 'N/A'}</td>
          </TableRow>
        );
      }
      // playlist
      if (key > 9) {
        return (
          <TableRow className="secondTable" key={key}>
            <td>{gameMode() ? gameMode(): 'N/A'}</td>
            <td>Matches: {data.matches}</td>
            <td>{data.dateCollected.split('T')[0]}</td>
            <td>Kills: {data.kills}</td>
            <td>{topKeys() ? topKeys() : 'N/A'}</td>
          </TableRow>
        );
      }
      return null;
    });

  return (
    <Wrapper>
      <SubNavigation />
      <TableWrap>
        <Table>
          <thead>
            <tr>
              {/* <th />
              <th />
              <th>Kills</th>
              <th>Place</th> */}
            </tr>
          </thead>
          <tbody>{tableResult}</tbody>
        </Table>
      </TableWrap>
    </Wrapper>
  );
};

export default History;
