import React from 'react';
import PropTypes from 'prop-types';
import { List, Btn, Text } from './ContactList.styled';

const ContactList = ({ contacts, onContactDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Btn onClick={() => onContactDelete(id)}>Delete</Btn>
      </List>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactDelete: PropTypes.func,
};

export default ContactList;
