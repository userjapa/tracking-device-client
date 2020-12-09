<template>
  <div class="tracking">
    <Map />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Map from '@/components/Map.vue'

@Options({
  components: {
    Map
  }
})

export default class Tracking extends Vue {}
</script>
