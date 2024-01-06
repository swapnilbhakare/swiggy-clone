export const filterData = (searchInput, restaurant) => {
  return restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
};
