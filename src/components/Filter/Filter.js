import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filterBox}>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
