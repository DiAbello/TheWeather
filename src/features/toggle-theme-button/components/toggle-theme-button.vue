<script setup lang="ts">
import Button from '~/src/shared/components/button/button.vue'
import { useThemeProvider } from '~/src/app/providers/theme'

const { toggle } = useThemeProvider()
</script>

<template>
  <Button>
    <VIcon
      icon="mdi-theme-light-dark"
      @click="toggle"
    />
  </Button>
</template>
