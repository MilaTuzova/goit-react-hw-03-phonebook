import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onContactFind }) => (
  <div>
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onContactFind} />
    </Label>
  </div>
);


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onContactFind: PropTypes.func,
};

export default Filter;
