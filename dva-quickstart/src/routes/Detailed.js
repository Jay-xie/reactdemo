import React from 'react';
import { connect } from 'dva';
//import DetailedList from '../components/DetailedList'
//           <DetailedList onDetailed={show} detailedlist={detailed} ></DetailedList>
import { Button} from 'antd';

var i=1;
const Detailed = ({ dispatch, detailed} ) => {
    function show(name){
        debugger;
        i=i+1;
        dispatch({
            type: 'detailed/delete',
            payload: name+i
          });
      }
    return (
        <div>
          <h2>List of Detailed</h2>

          <Button type="primary" onClick = {show} >Delete</Button>
          <span>{detailed[0].name}</span>
        </div>
      );
}
export default connect(({ detailed }) => ({
  detailed,
  }))(Detailed);
