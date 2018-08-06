import React from 'react';
import PropTypes from 'prop-types';
import { Button} from 'antd';


const DetailedList = ({onDetailed, detailedlist}) => {

    return (
        <div>
        <Button type="primary" onClick = {onDetailed}>Delete</Button>
        <input></input>
        <span>{detailedlist.name}</span>
        <span>{detailedlist.email}</span>
        <span>detailedlist.name</span>
        </div>
    );
};

DetailedList.propTypes = {
    onDetailed: PropTypes.func.isRequired,
};

export default DetailedList;
