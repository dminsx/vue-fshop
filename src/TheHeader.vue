<script setup></script>

<template>
  <header class="header">
    <a class="header__logo" href=""
      ><img src="./assets/images/Block.png" alt="Logo"
    /></a>

    <ul class="header__menu" role="navigation">
      <li>
        <a class="button button--menu button--active" href="/">Products</a>
      </li>
      <li>
        <a class="button button--menu" href="">Community</a>
      </li>
      <li>
        <a class="button button--menu" href="">Solutions</a>
      </li>
      <li>
        <a class="button button--menu" href="">Resourсes</a>
      </li>
      <li>
        <a class="button button--menu" href="">Pricing</a>
      </li>
      <li>
        <a class="button button--menu" href="">Contact</a>
      </li>
      <li>
        <a class="button button--menu" href="">Link</a>
      </li>
    </ul>

    <ul class="header__actions">
      <li>
        <a class="button button--sign-in" href="">Sign in</a>
      </li>
      <li>
        <a class="button button--black" href="">Register</a>
      </li>
    </ul>
  </header>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  gap: 24px;
  border-bottom: 1px solid var(--border-color-primary);
}

.header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__menu {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  gap: 8px;
  list-style: none;
}

.button {
  background-color: var(--primary-button-bgcolor);
  color: var(--primary-button-color);
  text-decoration: none;
  border: none;
  border-radius: 8px;
  padding: 8px;
}

.button--menu {
  &:hover {
    background-color: var(--active-button-bgcolor);
    color: var(--active-button-color);
  }
}

.button--active {
  background-color: var(--active-button-bgcolor);
  color: var(--active-button-color);
}

.header__actions {
  display: flex;
  gap: 12px;
  list-style: none;
}

.button--sign-in {
  border: 1px solid var(--button-border-color);
  background-color: var(--secondary-button-bgcolor);
  &:hover {
    opacity: 0.75;
  }
}

.button--tag {
  background-color: var(--active-button-color);
  color: var(--button-border-color);
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
}

.button--black {
  border: 1px solid var(--black-button-bgcolor);
  background-color: var(--black-button-bgcolor);
  color: var(--active-button-color);
  &:hover {
    opacity: 0.75;
  }
}
</style>
