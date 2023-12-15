export default function OrderSelector({ sortOrder, setSortOrder }) {
  function handleOrderSelect(e) {
    e.preventDefault();
    setSortOrder(e.target.value);
  }


  return (
    <form onChange={handleOrderSelect}>
      <select value={sortOrder} selected="asc">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
}
