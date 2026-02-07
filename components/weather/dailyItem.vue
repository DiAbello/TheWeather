<script setup lang="ts">
defineProps<{
  weatherItem: FormattedDailyForecast,
  dailyForecast: FormattedDailyForecast[],
  index: number
}>()
const { name } = useThemeProvider()
</script>

<template>
  <div class="daily__item item" :class="{gradient: index % 2}">
    <div class="item-contrast">
      <div class="item__weekday" :class="{weekend: getWeekday(weatherItem.dt_txt) === 'Сб' || getWeekday(weatherItem.dt_txt) === 'Вс'}">
        {{getWeekday(weatherItem.dt_txt)}}
      </div>
      <div class="item__day" :class="{weekend: getWeekday(weatherItem.dt_txt) === 'Сб' || getWeekday(weatherItem.dt_txt) === 'Вс'}">
        {{index === 0 ? 'Сегодня' : getDate(weatherItem.dt_txt).split('-')[2]}}
      </div>
      <div class="item__icon">
        <img
            :src="(`http://openweathermap.org/img/wn/${weatherItem?.icon}@2x.png`)"
            alt=""
        >
      </div>
    </div>
    <div class="item__temp">
      <div class="max">
        {{Math.round(weatherItem.temp_max)}}°
      </div>
      <div class="min">
        {{Math.round(weatherItem.temp_min)}}°
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.daily__item {
  padding: 5px 8px;
  border-radius: 22px;
  .item-contrast {
    background-color: var(--accentBackground);
    padding: 10px 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    &__weekday {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 3px;
    }
    &__day {
      font-size: 14px;
      font-weight: 500;
      color: var(--secondary-text);
    }
    &__icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      img{
        border-radius: 50%;
        transform: scale(0.6);
        box-shadow: 0 5px 2px var(--boxShadow);
      }
    }
    &__temp {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      min-height: 230px;
      .max {
        font-size: 20px;
        font-weight: 600;
      }
      .min {
        justify-self: flex-end;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
.weekend {
  color: var(--accentText) !important;
}
.gradient {
  background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 35%,
          var(--gradient3) 100%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
</style>