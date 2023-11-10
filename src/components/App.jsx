import DataForm from './FormData/FormData';
import ContactBook from './ContactBook/ContactBook';
import Filter from './Filter/Filter';
import { FormBox, BookTitle } from './App.styled';

export const App = () => {
  return (
    <FormBox>
      <BookTitle>PhoneBook</BookTitle>
      <DataForm />
      <Filter />
      <ContactBook />
    </FormBox>
  );
};
