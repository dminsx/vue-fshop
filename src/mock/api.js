import products from './products.json';

const PAGE_SIZE = 6;

export async function fetchProducts(page = 1, search = '') {
  console.log(`Fetching products for page ${page} with search "${search}"...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedSearch = search.trim().toLowerCase();

      const filteredProducts = normalizedSearch
        ? products.filter((product) =>
            product.name.toLowerCase().includes(normalizedSearch)
          )
        : products;

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