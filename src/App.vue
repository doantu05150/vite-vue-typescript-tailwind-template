<script setup lang="ts">
import LayoutContainer from './components/base/LayoutContainer.vue'
import LayoutDefault from './layouts/index.vue'
</script>

<template>
  <div id="root">
    <LayoutContainer name="index">
      <main>
        <RouterView />
      </main>
    </LayoutContainer>
  </div>
</template>
