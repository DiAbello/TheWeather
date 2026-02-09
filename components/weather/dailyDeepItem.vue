<script setup lang="ts">
import type {Forecast} from "~/types/types";
const DayParts = [
  'Утром',
  'Днём',
  'Вечером',
  'Ночью',
]
defineProps<{
  weatherItem: Forecast[],
  dailyForecast: DailyForecast,
  index: number
}>()
</script>

<template>
  <div class="daily__item">
    <div class="daily__left">
      <div class="wrow wrow--head">
        <div class="wcell wcell--day">
          <div class="dayTitle">{{ getWeekday(weatherItem[0].dt_txt) }}</div>
        </div>
        <div class="wcell headText">ощущается</div>
        <div class="wcell headText">ветер, м/с</div>
        <div class="wcell headText">влажность</div>
        <div class="wcell headText">давление,<br />мм рт. ст.</div>
      </div>
      <div class="wrow"
          v-for="(item, index) in weatherItem"
          :key="index"
      >
        <div class="wcell part">
          {{ weatherItem.length < DayParts.length ? DayParts.slice(DayParts.length - weatherItem.length)[index] : DayParts[index] }}
        </div>

        <div class="wcell tempIcon">
          <div class="temp">{{ Math.round(item.main.temp) }}°</div>
          <div class="icon">
            <img
                :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
                alt=""
            />
          </div>
        </div>
        <div class="wcell value">{{ Math.round(item.main.feels_like) }}°</div>
        <div class="wcell value">
          {{ item.wind.speed }},
          <span class="windDirection">{{getWindDirection(item.wind.deg)}}</span>
        </div>
        <div class="wcell value">{{ item.main.humidity }}%</div>
        <div class="wcell value">{{ item.main.pressure }}</div>
      </div>
    </div>
    <div class="daily__divider"></div>
    <div class="daily__right">
      right
    </div>
  </div>
</template>

<style scoped lang="scss">
.daily__item {
  width: 100%;
  border-radius: 24px;
  padding: 22px 26px;
  background: var(--blockBackground);
  color: var(--primary-text);
  display: flex;
  align-items: stretch;
  gap: 22px;
  .daily__left {
    flex: 1 1 70%;
  }
  .daily__right {
    flex: 0 0 30%;
    opacity: 0.9;
  }
  .daily__divider {
    width: 1px;
    background: var(--boxShadow);
    border-radius: 1px;
  }
  .wrow {
    display: grid;
    align-items: center;
    column-gap: 18px;
    grid-template-columns: 10% 20% 14% 12% 12% 14%;
    padding: 4px 0;
    font-variant-numeric: tabular-nums;
  }
  .wrow--head {
    padding-top: 0;
    padding-bottom: 14px;
  }
  .wcell--day {
    grid-column: 1 / span 2;
  }
  .dayTitle {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }
  .headText {
    font-size: 13px;
    opacity: 0.7;
    line-height: 1.2;
    white-space: nowrap;
  }
  .part {
    font-size: 12px;
    opacity: 0.6;
    white-space: nowrap;
  }
  .tempIcon {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .temp {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }
  .icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    img {
      width: 46px;
      height: 46px;
      transform: scale(0.9);
    }
  }
  .value {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    .windDirection {
      color: var(--secondary-text);
      font-size: 12px;
    }
  }
  .strong {
    font-weight: 700;
  }
}
</style>