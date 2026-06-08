<script setup></script>

<template>
  <div class="productInfo">
    <img src="./assets/images/Image.png" alt="Photo" />
    <div class="cardInfo">
      <p>Text</p>
      <p class="cardPrice">$0</p>
    </div>
  </div>
</template>

<style>
.productInfo {
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
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
