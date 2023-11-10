import { DataContactList, DataContactItem } from './ContactBook.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
export default function ContactBook() {
  const dispatch = useDispatch();
  const allContact = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredTasks = () => {
    return allContact.filter(elem =>
      elem.name.toLocaleLowerCase().includes(filterValue)
    );
  };

  return (
    <DataContactList>
      {getFilteredTasks().map(elem => (
        <DataContactItem key={elem.id}>
          {elem.name} : {elem.number}{' '}
          <button type="button" onClick={() => delContact(elem.id)}>
            Delete
          </button>
        </DataContactItem>
      ))}
    </DataContactList>
  );
}
