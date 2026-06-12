<script setup>
import { onBeforeMount, ref, watch, reactive, computed  } from "vue";
import MainFilter from "./MainFilter.vue";
import MainSort from "./MainSort.vue";
import ProductCard from "./ProductCard.vue";
import { fetchProducts } from "@/mock/api.js";
import { filtersOptions } from '@/helpers/filters';

const totalPages = ref(1);
const currentPage = ref(1);
const products = ref([]);
const isLoading = ref(true);

const searchString = ref("");

let timeoutId;

async function loadProducts() {
  isLoading.value = true;
  products.value = [];
  try {
    const res = await fetchProducts(currentPage.value, searchString.value, filters);
   
    products.value = res?.items || [];
    totalPages.value = res.totalPages;
  } catch (error) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}

const debounceFetchProducts = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    currentPage.value = 1;
    loadProducts();
  }, 1000);
}

watch(searchString, debounceFetchProducts);

onBeforeMount(() => {
  loadProducts();
});

function onButtonClick(pageNumber) {
  currentPage.value = pageNumber;
  loadProducts();
}


// Filters
const filters = reactive(Object.keys(filtersOptions).reduce((acc, el) => {
  acc[el] = [];

  return acc;
}, {}))

const selectedValues = computed(() => {
  return Object.keys(filtersOptions).reduce((acc, key) => {
    acc[key] = filtersOptions[key].reduce((acc, el) => {
      acc[el.id] = filters[key].includes(el.id);
      
      return acc;
    }, {});
    
    return acc;
  }, {})
})

function onChange(id, filterKey) {  
  if (filters[filterKey].includes(id)) {
    filters[filterKey] = filters[filterKey].filter(el => el !== id);
  } else {
    filters[filterKey].push(id);
  }

  debounceFetchProducts();
}
</script>

<template>
  <div class="main">
    <MainFilter :filters="filters" :selected-values="selectedValues" @change-filters="onChange" />

    <div class="main__product-card">
      <MainSort v-model="searchString"></MainSort>

      <div v-if="!isLoading" class="cards">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
        <div v-if="products.length === 0">Ничего не найдено</div>
      </div>

      <div v-else style="height: 1033px">Loading...</div>

      <div class="pagination">
        <button
          v-for="buttonNumber in totalPages"
          class="pagination__button"
          :class="{ pagination__button_active: buttonNumber === currentPage }"
          @click="onButtonClick(buttonNumber)"
        >
          {{ buttonNumber }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 32px;
  gap: 64px;
}

.main__product-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.pagination {
  display: flex;
  gap: 5px;
}

.pagination__button {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
}

.pagination__button_active {
  background-color: var(--active-button-bgcolor);
  color: #fff;
}
</style>
