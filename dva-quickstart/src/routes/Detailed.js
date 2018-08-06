import React from 'react';
import { connect } from 'dva';
import DetailedList from '../components/DetailedList'

const Detailed = ({ dispatch, detaileds} ) => {
    const detaileds2=[
        { name: 'me', id: 1 },
        { email: 'emails', id: 2}
      ]
    function show(){
        debugger;
        dispatch({
            type: 'detailed/delete',
            payload:""
          });
      }
    return (
        <div>
          <h2>List of Detailed</h2>
          <DetailedList onDetailed={show} detailedlist={detaileds2} ></DetailedList>
        </div>
      );
}
export default connect(({ detaileds }) => ({
    detaileds,
  }))(Detailed);
