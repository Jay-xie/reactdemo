import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products, onDelete2 }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <div>
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
        </div>
        
      );
    },
  }];
  return (
    <div>
    <Table
      dataSource={products}
      columns={columns}
    />
    <Button onClick = {onDelete2}>Delete2</Button>
    </div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  onDelete2: PropTypes.func.isRequired,
};

export default ProductList;
