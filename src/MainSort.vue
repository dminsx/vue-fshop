<script setup></script>

<template>
  <div class="filterBar">
    <div class="searchFilter">
      <input type="text" placeholder="Search" class="inputSearch" />
      <button type="submit" class="buttonSearch">
        <img src="./assets/images/Search.png" alt="Search" />
      </button>
    </div>
    <div class="tagGroup">
      <div class="button button--tag button--black">New</div>
      <div class="button button--tag">Price descending</div>
      <div class="button button--tag">Rating</div>
      <div class="button button--tag">Price ascending</div>
    </div>
  </div>
</template>

<style>
.filterBar {
  display: flex;
  justify-content: space-between;
  height: 40px;
}

.searchFilter {
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
  width: 64px;
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
