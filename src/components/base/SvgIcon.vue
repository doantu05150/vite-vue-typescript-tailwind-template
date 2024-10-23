<!-- This component based on NuxtIcons module. Please take a look at https://github.com/gitFoxCode/nuxt-icons -->
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  filled?: boolean
}>(), { filled: false })

const icon = ref<string | Record<string, any>>('')
let hasStroke = false

async function getIcon() {
  try {
    const iconsImport = import.meta.glob('../../assets/icons/**/**.svg', {
      eager: false,
      query: '?raw',
      import: 'default',
    })
    const rawIcon = await iconsImport[`../../assets/icons/${props.name}.svg`]()
    if (rawIcon.includes('stroke')) {
      hasStroke = true
    }
    icon.value = rawIcon
  }
  catch {
    console.error(
      `[svg-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
    )
  }
}

watchEffect(getIcon)
</script>

<template>
  <span
    class="svg-icon"
    :class="{ 'svg-icon--fill': !filled, 'svg-icon--stroke': hasStroke && !filled }"
    v-html="icon"
  />
</template>

<style lang="css">
.svg-icon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
.svg-icon.svg-icon--fill,
.svg-icon.svg-icon--fill * {
  fill: currentColor !important;
}

.svg-icon.svg-icon--stroke,
.svg-icon.svg-icon--stroke *{
  stroke: currentColor !important;
}
</style>
