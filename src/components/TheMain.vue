<script setup>
import { onBeforeMount, ref, watch } from "vue";
import MainFilter from "./MainFilter.vue";
import MainSort from "./MainSort.vue";
import ProductCard from "./ProductCard.vue";
import { fetchProducts } from "@/mock/api.js";

const totalPages = ref(1);
const currentPage = ref(1);
const products = ref([]);
const isLoading = ref(true);

const searchString = ref("");

let timeoutId;

function loadProducts() {
  isLoading.value = true;
  products.value = [];
  fetchProducts(currentPage.value, searchString.value).then((data) => {
    totalPages.value = data.totalPages;
    products.value = data.items;
    isLoading.value = false;
  });
}

watch(searchString, (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    loadProducts();
  }, 1000);
});

onBeforeMount(() => {
  loadProducts();
});

function onButtonClick(pageNumber) {
  currentPage.value = pageNumber;
  loadProducts();
}
</script>

<template>
  <div class="main">
    <MainFilter></MainFilter>

    <div class="main__product-card">
      <MainSort v-model="searchString"></MainSort>

      <div v-if="!isLoading" class="cards">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
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

<style>
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
