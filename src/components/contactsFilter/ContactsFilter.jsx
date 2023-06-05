import { useDispatch, useSelector } from 'react-redux';
import { onChangeValue } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  let value = useSelector(selectFilter);

  return (
    <>
      <TextField
        label="Find contacts by name"
        id="findName"
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(onChangeValue(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
