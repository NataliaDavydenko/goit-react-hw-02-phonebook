import { ButtonAdd } from 'components/PhoneBook/ButtonAdd';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { InputName } from 'components/PhoneBook/InputName';
import { InputTel } from 'components/PhoneBook/InputTel';
import { LabelContact } from 'components/PhoneBook/LabelContact';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  clickOnBtnAdd = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();

  };

  render() {
    return (
      <>
        <PhoneBook onSubmit={this.clickOnBtnAdd}>
          <LabelContact title="Name">
            <InputName value={this.state.name} onChange={this.handleChange} />
          </LabelContact>
          <LabelContact title="Number">
            <InputTel value={this.state.number} onChange={this.handleChange} />
          </LabelContact>
          <ButtonAdd text="Add contact" />
        </PhoneBook>
      </>
    );
  }
}
