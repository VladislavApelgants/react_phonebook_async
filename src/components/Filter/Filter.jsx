import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChange = e => {
    const { value } = e.currentTarget;
    const normalize = value.toLocaleLowerCase();
    dispatch(filter(normalize));
  };

  return (
    <input type="text" name="filter" value={filterValue} onChange={onChange} />
  );
}
