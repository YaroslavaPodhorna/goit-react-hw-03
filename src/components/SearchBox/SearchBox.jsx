import css from "./SearchBox.module.css";
export default function SearchBox({ filter, setFilter }) {
  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
