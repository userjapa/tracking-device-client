<template>
  <div class="about">
    <h1>Tracking Device</h1>
    <p>This is an example of realtime tracking device using <strong>Vue</strong>, <strong>NodeJS</strong> and a <strong>Lilypad Arduino</strong>.</p>
    <p>Is basically works with the <strong>Lilypad</strong> connected to an <strong>GSM</strong> module and an <strong>GPS</strong> module. The <strong>GSM</strong> is responsible for internet connection and the <strong>GPS</strong> for getting the coordinates.</p>
    <p>The <strong>Lilypad</strong> get the current coordinate and sends it as a string, separating the latitude and longitude by a semicolon (<strong>Example: "latitude;longitude"</strong>), by a HTTP POST request to the server created with <strong>NodeJS</strong>.</p>
    <p>The server receives the request and emits a "tracking" event with the coordinates within the payload as a JSON (<strong>Example: { latitude: 0, longitude: 0 }</strong>) using <strong>SocketIO</strong> to all clients connected.</p>
    <p>The client, that was created with <strong>Vue</strong>, receives the event using <strong>SocketIO</strong> and update the marker on the map provided by <a href="https://leafletjs.com/" target="_blank"> <strong>Leaflet</strong> </a> and <a href="https://www.openstreetmap.org/" target="_blank"> <strong>OpenStreetMap</strong> </a>.</p>

    <br/>

    <p>Server repository: <a href="https://github.com/userjapa/tracking-device-server" target="_blank">https://github.com/userjapa/tracking-device-server</a></p>
    <p>Client repository: <a href="https://github.com/userjapa/tracking-device-client" target="_blank">https://github.com/userjapa/tracking-device-client</a></p>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding: 0 1rem 1rem 1rem;

  h1, p {
    word-break: break-word;
  }

  h1 {
    margin: 0 0 1rem 0;
  }

  a {
    color: #42b983;
  }

  p {
    margin: .5rem 0;
  }
}
</style>
