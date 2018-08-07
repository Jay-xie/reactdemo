import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'antd';


const DetailedList = ({onDetailed, detailedlist}) => {

    const detailedlist2 = {
        name : "xiejie",
        email : "xiejie@hotmail.com"
    }
    return (
        <div>
        <Button type="primary" onClick = {onDetailed(detailedlist2.name)}>Delete</Button>
        <input></input>
        <span>{detailedlist2.name}</span>
        <span>{console.log(detailedlist)}</span>
        <span>{console.log(detailedlist[0].name)}</span>
        <span>{detailedlist[0].name}</span>
        <br/>
        <span>{detailedlist[0].email}</span>
        <br/>
        <span>{detailedlist2.email}</span>
        <span>detailedlist.name</span>
        </div>
    );
};

DetailedList.propTypes = {
    onDetailed: PropTypes.func.isRequired,
};

export default DetailedList;
