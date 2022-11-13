import PropTypes from 'prop-types';
import { ContactItem, Button, Contacts, ContactText} from './ContactList.styled';

export const ContactList = ({ contacts, onClickDelete }) => {
  const BtnDelete = ({ onClickDelete, id }) => (
    <Button type="button" onClick={onClickDelete} id={id}>
      Delete
    </Button>
  );

  return (
    <Contacts>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            <ContactText>
              {name} : {number}
            </ContactText>
            <BtnDelete
              name="Delete"
              onClickDelete={() => onClickDelete(id)}
              id={id}
            />
          </ContactItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};