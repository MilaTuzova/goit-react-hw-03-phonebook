import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContact, Label, Input, Btn } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '', id: '' };

  handleChange = evt => {
    // console.log(evt.currentTarget.value);
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <FormContact onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameId}>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </Label>

          <Label htmlFor={this.numberId}>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </Label>
          <Btn type="submit">Add contact</Btn>
        </FormContact>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
