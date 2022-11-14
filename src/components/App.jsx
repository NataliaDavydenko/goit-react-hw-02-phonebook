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
    const isExist = this.state.contacts.find(contact => contact.name === data.name);
    
    if (
      isExist
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

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  getVisibleContacts = () => { 
    const filterNormalize = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  }

  render() {
    
    const visibleContacts = this.getVisibleContacts();

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
