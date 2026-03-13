<script setup lang="ts">
import Loading from '~/src/shared/components/loading/loading.vue'
import Button from '~/src/shared/components/button/button.vue'
import { useGeolocation } from '~/src/entities/location/lib/use-geolocation'
import { useDetectLocation } from '~/src/features/detect-location/model/use-detect-location'

const { pending } = useGeolocation()
const { detectLocation } = useDetectLocation()
</script>

<template>
  <Button
    class="b"
    :disabled="pending"
    :min-width="137"
    @click="detectLocation"
  >
    <Loading v-if="pending" />
    <span v-if="!pending">
      <VIcon icon="mdi-map-marker" />
      <span>
        Найти меня
      </span>
    </span>
  </Button>
</template>
