<template>
  <div class="menu">
    <ul class="menu__list list">
      <li class="list-item" :class="{ selectedPage : route.path === '/'}">
        <RouterLink class="list-link" to="/">
          Главная
        </RouterLink>
      </li>
      <li class="list-item"
          :class="{ selectedPage : route.path === '/precipitation'}"
      >
        <RouterLink class="list-link" to="/precipitation">
          Карта осадков
        </RouterLink>
      </li>
      <li class="list-item" :class="{ selectedPage : route.path === '/monthBroadcast'}">
        <RouterLink class="list-link" to="/monthBroadcast">
          Прогноз на месяц
        </RouterLink>
      </li>
      <li class="list-item" :class="{ selectedPage : route.path === '/nearestBroadcast'}">
        <RouterLink class="list-link" to="/nearestBroadcast">
          На 10 дней
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped lang="scss">
.selectedPage {
  background-color: #1C1C1C;
  border-radius: 16px;
}

.menu {
  min-width: 210px;
  .list {
    .list-item {
      padding: 12px 16px;
      font-size: 16px;
      cursor: pointer;
      .list-link:hover {
        color: var(--Attention) !important;
      }
    }
  }
}
</style>