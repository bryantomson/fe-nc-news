export default function SortBySelector({ setSortBy, sortBy, setSearchParams, searchParams }) {
  function handleSortSelect(e) {
    e.preventDefault();
    const param = e.target.value
    setSortBy(param);


}
    
    
        // `sort_by=${param}`)
  


  return (
    <form onChange={handleSortSelect}>
      <select value={sortBy} selected="created_at">
        <option value="created_at">date</option>

        <option value="title">title</option>
        <option value="author">author</option>
        <option value="votes">votes</option>
      </select>
    </form>
  );
}