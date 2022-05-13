import Card from "../components/Card";

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              className="search-clear"
              src="/img/search-clear.svg"
              alt="search-clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => {
                onAddToFavorite(obj);
              }}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              added={cartItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;