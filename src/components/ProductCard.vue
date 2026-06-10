<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="productInfo">
    <img :src="product.image" :alt="product.name + ' image'" />
    <div class="cardInfo">
      <p>{{ product.name }}</p>
      <p class="cardPrice">₽ {{ product.price }}</p>
    </div>
  </div>
</template>

<style>
.productInfo {
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 8px;
  gap: 16px;
}

.productInfo img {
  aspect-ratio: 1;
  height: 247px;
}

.cardInfo {
  display: flex;
  flex-direction: column;
  line-height: 140%;
  gap: 8px;
  color: #1e1e1e;
}

.cardPrice {
  font-weight: 600;
}
</style>
