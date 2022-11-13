import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Main } from './Main/Main';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { P, SectionTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = data => {
    const id = nanoid();
    if (
      this.state.contacts.filter(contact => contact.name === data.name).length >
      0
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
          id: id,
        },
      ],
    });
  };

  reset = () => {
    this.setState({ filter: '' });
  };

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
    this.reset();
  };

  render() {
    const filterNormalize = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
    return (
      <Main title="Phonebook">
        <ContactForm onChange={this.handleChange} onSubmit={this.formSubmit} />
        {this.state.contacts.length > 0 ? (
          <>
            <SectionTitle>Contacts</SectionTitle>
            <Filter
              title="Find contact by name"
              onChange={this.handleChange}
              value={this.state.filter}
            />
            <ContactList
              contacts={visibleContacts}
              onClickDelete={this.onClickDelete}
            />
          </>
        ) : (
          <P>Phonebook is empty</P>
        )}
      </Main>
    );
  }
}
