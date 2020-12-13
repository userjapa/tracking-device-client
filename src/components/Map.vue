<template>
  <div id="map">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const DefaultIcon = L.icon({
  iconUrl: '/img/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [-10, 31],
  popupAnchor: [22.5, -31],
  shadowUrl: '/img/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [-10, 31]
})

L.Marker.prototype.options.icon = DefaultIcon

@Options({
  watch: {
    coordinate (coords: L.LatLng): void {
      if (this.marker)
        this.map.removeLayer(this.marker)

      this.marker = L.marker(coords).addTo(this.map)

      this.marker.bindPopup('teste')

      this.map.panTo(coords, {
        animate: true
      })
    }
  }
})

export default class Map extends Vue {
  map: L.Map | null = null
  marker: L.Marker | null = null
  coordinate: L.LatLng | null = null

  setCoordinate(coordinate: L.LatLng): void {
    this.coordinate = coordinate
  }

  showLeaflet (): void {
    this.map = L.map('map').setView([-23.647197801142262, -52.60874578960303], 20)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }

  mounted (): void {
    this.showLeaflet()
  }
}
</script>

<style scoped lang="scss">
#map {
  height: 100%;
  width: 100%;
}
</style>
