import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {filterContacts.map(contact => (
          <ListItem key={contact.id} contact={contact}>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <Button startIcon={<DeleteIcon />} id={contact.id} onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
