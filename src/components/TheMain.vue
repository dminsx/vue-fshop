<script setup>
import MainFilter from "./MainFilter.vue";
import MainSort from "./MainSort.vue";
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <div class="main">
    <MainFilter></MainFilter>

    <div class="main__product-card">
      <MainSort></MainSort>
      <div class="cards">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
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
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
