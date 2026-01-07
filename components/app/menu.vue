<template>
  <div class="menu">
    <ul class="menu__list list">
      <li class="list-item">
        <RouterLink to="#">Главная</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink to="#">Карта осадков</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink to="#">Прогноз на месяц</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink to="#">На 10 дней</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.menu {
  min-width: 258px;
}
</style>