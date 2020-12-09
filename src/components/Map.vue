<template>
  <div id="map">
  </div>
</template>

<script lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import { Options, Vue } from 'vue-class-component';

@Options({
  methods: {
    showLeaflet() {
      this.map = L.map('map').setView([51.505, -0.09], 20)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    }
  },
  mounted() {
    this.showLeaflet()
  }
})

export default class Map extends Vue {
  map: L.Map;
  showLeaflet(): void; 
}
</script>

<style scoped lang="scss">
#map {
  height: 100%;
  width: 100%;
}
</style>
