const FilterBook = ({ filter, handleFilterChange }) => (
  <div>
    Filter phonebook: <input value={filter} onChange={handleFilterChange} />
  </div>
);

export default FilterBook;
