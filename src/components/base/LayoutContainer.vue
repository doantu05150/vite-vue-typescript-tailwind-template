<script setup lang="ts">
import { computed, defineAsyncComponent, ref, shallowRef, watchEffect } from 'vue'

const props = defineProps<{
  name: string
}>()

const layout = shallowRef<string | Record<string, any>>('')

const layoutName = computed(() => {
  if (!props.name || ['default', 'index'].includes(props.name)) {
    return 'index'
  }
  return props.name.toLowerCase()
})

async function getLayout() {
  try {
    const rawLayout = defineAsyncComponent(() => import(`../../layouts/${layoutName.value}.vue`))
    layout.value = rawLayout
  }
  catch {
    console.error(
      `layout '${props.name}' doesn't exist in '/layouts'`,
    )
  }
}

watchEffect(getLayout)
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
