<script setup>
import { computed } from "vue";
import { filtersOptions, OPTIONS_LABELS } from "@/helpers/filters";

const props = defineProps({
  filters: Object,
  selectedValues: Object,
});

const emit = defineEmits(["change"]);

function onChange(id, filterKey) {
  emit("change", id, filterKey);
}

// Определить пропсы filters, selectedValues
// Выплевывать эмит change-filters
// Переписать шаблон под отрисовку по спискам

const clearedFiltersOptions = computed(() => {
  return Object.keys(props.filters)
    .filter((key) => props.filters[key].length > 0)
    .reduce((acc, el) => {
      acc[el] = props.filters[el];

      return acc;
    }, {});
});
</script>

<template>
  <div class="filter-menu">
    <div
      v-for="(filtersOptions, key) in clearedFiltersOptions"
      :key="key"
      class="keywords"
    >
      <span>{{ OPTIONS_LABELS[key] }}</span>
      <div class="keywords__list">
        <div v-for="id in filtersOptions" class="keywords__tag">
          <span>{{ id }}</span>
          <button class="button button--keyword" @click="onChange(id, key)">
            <img src="../assets/images/Icon.png" alt="Delete" />
          </button>
        </div>
      </div>
    </div>

    <div class="filter-group">
      <div
        v-for="(option, key) in filtersOptions"
        :key="key"
        class="filterLabel"
      >
        <div>{{ OPTIONS_LABELS[key] }}</div>
        <div v-for="variant in option" :key="variant.id">
          <input
            :checked="selectedValues[key][variant.id]"
            class="checkbox"
            type="checkbox"
            :id="variant.id"
            @change="(event) => onChange(event.target.id, key)"
          />
          <label class="labelName" :for="variant.label">{{
            variant.label
          }}</label>
        </div>
      </div>
    </div>

    <div class="filterPrice">
      <div class="price">
        <label class="labelPrice" for="Label">Label</label>
        <div class="rangePrice">$0-100</div>
      </div>
      <input type="range" min="0" max="100" value="50" class="sliderPrice" />
    </div>
  </div>
</template>

<style>
.filter-menu {
  min-width: 240px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
  border: 1px solid var(--border-color-primary);
  border-radius: 8px;
}

.keywords {
  display: flex;
  flex-direction: column;
  line-height: 140%;
  gap: 12px;
}

.keywords__list {
  display: flex;
  flex-wrap: wrap;
  line-height: 100%;
  gap: 4px;
}

.keywords__tag {
  display: flex;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--active-button-color);
  gap: 8px;
}

.keywords__tag span {
  line-height: 100%;
}

.button--keyword {
  background-color: var(--active-button-color);
  padding: 0;

  &:hover {
    cursor: pointer;
  }
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  line-height: 140%;
}

.filterLabel {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.labelCheck {
  display: flex;
  align-items: center;
  gap: 12px;
}

.checkbox {
  width: 16px;
  height: 16px;
}

.labelName {
  color: #1e1e1e;
}

.labelDescription {
  padding-left: 21px;
  color: #757575;
}

.price {
  display: flex;
  justify-content: space-between;
  color: #1e1e1e;
  line-height: 140%;
}

.rangePrice {
  font-size: 14px;
}

.sliderPrice {
  width: 100%;
}
</style>
