<script setup lang="ts">
const props = defineProps<{
  dailyForecast: DailyForecast
}>()
const formattedDeepDailyForecast = computed(() => getFormattedDeepDailyForecast(props?.dailyForecast))
</script>

<template>
  <div class="daily__content">
    <WeatherDailyDeepItem
        v-for="(item, index) in formattedDeepDailyForecast?.list"
        :key="index"
        :index="index"
        :weatherItem="item"
        :dailyForecast="formattedDeepDailyForecast"
    />
  </div>
</template>

<style scoped lang="scss">
.daily__content {
  margin-top: -16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>