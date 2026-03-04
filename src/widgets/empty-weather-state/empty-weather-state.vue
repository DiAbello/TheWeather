<script setup lang="ts">
</script>
<template>
  <div class="weather-empty">
    <div class="weather-empty__content">
      <div class="weather-empty__icon">
        🌍
      </div>
      <div class="weather-empty__text">
        <h2>Укажите город</h2>
        <p>
          Чтобы мы смогли показать актуальную погоду,
          выберите город в поиске выше.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.weather-empty {
  width: 100%;
  min-height: 180px;
  border-radius: 20px;
  padding: 32px 36px;
  background: linear-gradient(
          135deg,
          var(--gradient2),
          var(--gradient3)
  );
  color: var(--primary-text);
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__icon {
    font-size: 48px;
    opacity: 0.85;
    animation: globe-float 4s ease-in-out infinite;
  }
  @keyframes globe-float {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(8deg) scale(1.2);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }
  &__text {
    h2 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--primary-text);
    }

    p {
      font-size: 14px;
      color: var(--secondary-text);
      line-height: 1.4;
      max-width: 420px;
    }
  }
}

</style>