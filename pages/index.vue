<script lang="ts" setup>

const { currentBroadcast, loadCurrentBroadcast } = useWeather()
const { location } = useLocation()

const key = computed(() =>
    location.value ?
        `current:${location.value.lat},${location.value.lon}`
        : 'current:none'
)
const { pending, error } = await useAsyncData(
    key.value,
    () => loadCurrentBroadcast(location.value!.lat, location.value!.lon),
    {
      immediate: !!location.value,
    }
)

</script>

<template>
  <div class="main">
    <div class="get-started" v-if="!location">
      Выберите город
    </div>
    <div class="pending" v-else-if="pending">
      Загрузка...
    </div>
    <div class="error" v-else-if="error">
      Ошибка
    </div>
    <div class="main__weather weather" v-else-if="currentBroadcast">
      <div class="weather__temperature">
            <span class="weather__temperature-value">
              {{Math.round(currentBroadcast?.main.temp)}}
            </span>
        <span class="weather__temperature-degree">°</span>
      </div>
      <div class="d-flex align-end w-100">
      <div class="weather__content">
        <div class="weather__title">
          <img
              class="weather__icon"
              :src="`http://openweathermap.org/img/wn/${currentBroadcast?.weather[0].icon}@2x.png`"
              alt=""
          />
          <span class="weather__title-text">
              {{currentBroadcast?.weather[0].description.charAt(0).toUpperCase() + currentBroadcast?.weather[0].description.slice(1)}}
            </span>
        </div>
        <div class="weather__subtitle">
          Ощущается как {{Math.round(currentBroadcast?.main.feels_like)}}°
        </div>
      </div>
      <div class="weather__stats">
        <div class="wind d-flex align-center ga-1">
          <div class="wind__icon">
            <svg class="stats-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <span class="wind__value">
            {{Math.round(currentBroadcast?.wind.speed * 10) / 10 }} м/с, {{getWindDirection(currentBroadcast?.wind.deg)}}
          </span>
        </div>
        <div class="pressure d-flex align-center ga-1">
            <span class="pressure__icon">
                <svg class="stats-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294" stroke="#ffffff" stroke-linecap="round"></path> <path d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z" stroke="#ffffff"></path> <path d="M12 6V8" stroke="#ffffff" stroke-linecap="round"></path> <path d="M5.63599 8.63574L7.0502 10.05" stroke="#ffffff" stroke-linecap="round"></path> <path d="M18.364 8.63574L16.9498 10.05" stroke="#ffffff" stroke-linecap="round"></path> <path d="M20.6934 17.3291L18.7615 16.8115" stroke="#ffffff" stroke-linecap="round"></path> <path d="M3.30664 17.3291L5.23849 16.8115" stroke="#ffffff" stroke-linecap="round"></path></g></svg>
              </span>
          <span class="pressure__value">
                {{currentBroadcast?.main.pressure}}
              </span>
        </div>
        <div class="humidity d-flex align-center ga-1">
              <span class="humidity__icon">
              <svg class="stats-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z" stroke="#ffffff"></path> <path d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14" stroke="#ffffff" stroke-linecap="round"></path> </g></svg>
            </span>
          <span class="humidity__value">
              {{currentBroadcast?.main.humidity}}%
            </span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex: 0 1 67.5%;
  .weather {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    border-radius: 16px;
    width: 100%;
    background-color: #161617;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
    &__temperature {
      display: flex;
      align-items: flex-start;
      line-height: 1;
      &-value {
        font-size: 72px;
        font-weight: 600;
        letter-spacing: -0.02em;
      }
      &-degree {
        font-size: 32px;
        font-weight: 500;
        margin-top: 6px;
        margin-left: 2px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
    }
    &__title {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: 6px;
      margin-left: 12px;
      &-text {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: -0.01em;
      }
    }
    &__icon {
      width: 20px;
      height: 20px;
      transform-origin: center;
      transform: scale(3.2);
      filter: brightness(0) invert(1);
    }
    &__subtitle {
      font-weight: 500;
      margin-top: 10px;
      font-size: 14px;
      line-height: 18px;
      color: #999999;
    }
    &__stats {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 15px;
      margin-left: auto;
      font-weight: 500;
      color: #999999;
      .stats-icon {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>