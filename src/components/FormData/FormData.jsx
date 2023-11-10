import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { FormFormik, Button, ErrMessage } from './FormData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { addContact } from 'redux/contactsSlice';

export default function DataForm() {
  const dispatch = useDispatch();
  const allContact = useSelector(selectContacts);

  const addContacts = data => {
    if (allContact.find(elem => elem.name === data.name)) {
      alert('Такое имя уже есть, посмотри в книгу, используй фильтр');
      return;
    }
    dispatch(addContact(data));
  };

  let userSchema = object({
    name: string().min(3).required(),
    number: string().min(3).required(),
  });
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        addContacts(values);
        resetForm();
      }}
      validationSchema={userSchema}
    >
      <FormFormik>
        <label htmlFor="input-name">
          <Field
            type="text"
            name="name"
            id="input-name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrMessage name="name" component="div" />
        </label>
        <label htmlFor="input-phone">
          <Field
            type="tel"
            name="number"
            id="input-phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrMessage name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormFormik>
    </Formik>
  );
}
