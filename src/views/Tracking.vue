<template>
  <div class="tracking">
    <Map ref="map"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { io, Socket } from 'socket.io-client'
import { LatLng } from 'leaflet'

import Map from '@/components/Map.vue'

@Options({
  components: {
    Map
  }
})

export default class Tracking extends Vue {
  socket: Socket | null = null

  $refs!: {
    map: Map;
  }

  setMarker(coords: LatLng): void {
    if (this.$refs.map)
      this.$refs.map.setCoordinate(coords)
  }

  created (): void {
    this.socket = io('http://207.154.195.122:3000', {
      path: '/socket',
      transports: ['websocket'],
      secure: false,
      rejectUnauthorized: false
    })

    this.socket.on('tracking', (coords: LatLng) => {
      this.setMarker(coords)
    })
  }
}
</script>
