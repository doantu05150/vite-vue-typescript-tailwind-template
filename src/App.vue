<script setup lang="ts">
import LayoutDefault from './layouts/index.vue'
</script>

<template>
  <div id="root">
    <LayoutDefault>
      <main>
        <RouterView />
      </main>
    </LayoutDefault>
  </div>
</template>
