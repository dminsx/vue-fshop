import products from "./products.json";

const PAGE_SIZE = 9;

export async function fetchProducts(
  page = 1,
  search = "",
  filters = {},
  sort = null,
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedSearch = search.trim().toLowerCase();

      let filteredProducts = products.filter((product) => {
        if (
          normalizedSearch &&
          !product.name.toLowerCase().includes(normalizedSearch)
        ) {
          return false;
        }

        if (
          filters.category?.length &&
          !filters.category.includes(product.category)
        ) {
          return false;
        }

        if (
          filters.color?.length &&
          !filters.color.includes(product.color)
        ) {
          return false;
        }

        if (
          filters.material?.length &&
          !filters.material.includes(product.material)
        ) {
          return false;
        }

        if (
          filters.country?.length &&
          !filters.country.includes(product.country)
        ) {
          return false;
        }

        if (
          filters.guarantee?.length &&
          !filters.guarantee.includes(product.guarantee)
        ) {
          return false;
        }

        if (
          filters.inStock !== undefined &&
          filters.inStock !== null &&
          product.inStock !== filters.inStock
        ) {
          return false;
        }

        if (
          filters.isPopular !== undefined &&
          filters.isPopular !== null &&
          product.isPopular !== filters.isPopular
        ) {
          return false;
        }

        if (
          filters.minPrice !== undefined &&
          product.price < filters.minPrice
        ) {
          return false;
        }

        if (
          filters.maxPrice !== undefined &&
          product.price > filters.maxPrice
        ) {
          return false;
        }

        return true;
      });

      // Сортировка по цене, названию, гарантийному сроку
      if (sort?.field) {
        filteredProducts = [...filteredProducts].sort((a, b) => {
          let aValue;
          let bValue;

          switch (sort.field) {
            case "price":
              aValue = a.price;
              bValue = b.price;
              break;

            case "name":
              aValue = a.name.toLowerCase();
              bValue = b.name.toLowerCase();
              break;

            case "guarantee":
              aValue = parseInt(a.guarantee);
              bValue = parseInt(b.guarantee);
              break;

            default:
              return 0;
          }

          if (aValue < bValue) {
            return sort.order === "desc" ? 1 : -1;
          }

          if (aValue > bValue) {
            return sort.order === "desc" ? -1 : 1;
          }

          return 0;
        });
      }

      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      resolve({
        items: filteredProducts.slice(start, end),
        page,
        pageSize: PAGE_SIZE,
        total: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / PAGE_SIZE),
        hasNextPage: end < filteredProducts.length,
      });
    }, 1000);
  });
}