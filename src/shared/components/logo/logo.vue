<script lang="ts" setup="">
import { useThemeProvider } from "~/src/app/providers/theme";
const { name } = useThemeProvider()
</script>

<template>
  <VAppBarTitle class="title">
    <img v-if="name === 'dark'" src="~/assets/logo-dark.svg" alt="Dark logo">
    <img v-if="name === 'light'" src="~/assets/logo-light.svg" alt="Light logo">
  </VAppBarTitle>
</template>