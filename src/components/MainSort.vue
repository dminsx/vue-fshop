<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "new",
  },
  sort: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "update:sort", "clear:sort"]);

function onInput(event) {
  emit("update:modelValue", event.target.value);
}

function onSortChange(field) {
  emit("update:sort", field);
}

const ending = computed(() => {
  return props.sort.order === "desc" ? "↓" : "↑";
});
</script>

<template>
  <div class="filterBar">
    <div class="searchFilter">
      <input
        :value="modelValue"
        type="text"
        placeholder="Search"
        class="inputSearch"
        @input="onInput"
      />
      <button type="submit" class="buttonSearch">
        <img src="../assets/images/Search.png" alt="Search" />
      </button>
    </div>
    <div class="tagGroup">
      <button
        class="button button--tag"
        :class="{ 'button--black': sort.field === 'name' }"
        @click="onSortChange('name')"
      >
        Name <span v-if="sort.field === 'name'">{{ ending }}</span>
      </button>
      <button
        class="button button--tag"
        :class="{ 'button--black': sort.field === 'price' }"
        @click="onSortChange('price')"
      >
        Price <span v-if="sort.field === 'price'">{{ ending }}</span>
      </button>
      <button
        class="button button--tag"
        :class="{ 'button--black': sort.field === 'guarantee' }"
        @click="onSortChange('guarantee')"
      >
        Guarantee <span v-if="sort.field === 'guarantee'">{{ ending }}</span>
      </button>
      <button
        v-if="sort.field !== ''"
        class="button button--tag"
        @click="emit('clear:sort')"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<style>
.filterBar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  gap: 24px;
}

.searchFilter {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 999px;
  padding: 12px 16px;
  overflow: hidden;
  gap: 8px;
}

.inputSearch {
  flex: 1;
  width: 50%;
  border: none;
  padding: 0;

  &::placeholder {
    color: #b3b3b3;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }
}

.buttonSearch {
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
}

.tagGroup {
  padding: 4px 0px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
