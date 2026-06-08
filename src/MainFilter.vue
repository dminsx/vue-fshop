<script setup></script>

<template>
  <div class="filter-menu">
    <div class="keywords">
      <span>Keywords</span>
      <div class="keywords__list">
        <div class="keywords__tag">
          <span>Spring</span>
          <button class="button button--keyword">
            <img src="./assets/images/Icon.png" alt="Delete" />
          </button>
        </div>
        <div class="keywords__tag">
          <span>Smart</span>
          <button class="button button--keyword">
            <img src="./assets/images/Icon.png" alt="Delete" />
          </button>
        </div>
        <div class="keywords__tag">
          <span>Modern</span>
          <button class="button button--keyword">
            <img src="./assets/images/Icon.png" alt="Delete" />
          </button>
        </div>
      </div>
    </div>

    <div class="filter-group">
      <div class="filterLabel">
        <div>
          <input class="checkbox" type="checkbox" name="label" id="label1" />
          <label class="labelName" for="label1">Label 1</label>
          <div class="labelDescription">Description</div>
        </div>
        <div>
          <input class="checkbox" type="checkbox" name="label" id="label2" />
          <label class="labelName" for="label2">Label 2</label>
          <div class="labelDescription">Description</div>
        </div>
        <div>
          <input class="checkbox" type="checkbox" name="label" id="label3" />
          <label class="labelName" for="label3">Label 3</label>
          <div class="labelDescription">Description</div>
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

    <div class="filter-group">
      Color
      <div>
        <input class="checkbox" type="checkbox" name="label" id="red" />
        <label class="labelName" for="red">Red</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" name="label" id="green" />
        <label class="labelName" for="green">Green</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" name="label" id="blue" />
        <label class="labelName" for="blue">Blue</label>
      </div>
    </div>

    <div class="filter-group">
      Size
      <div>
        <input class="checkbox" type="checkbox" name="label" id="sm" />
        <label class="labelName" for="sm">Small</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" name="label" id="md" />
        <label class="labelName" for="md">Medium</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" name="label" id="lg" />
        <label class="labelName" for="lg">Large</label>
      </div>
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
