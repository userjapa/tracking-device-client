<template>
  <div id="nav">
    <router-link to="/">Tracking</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view class="view"/>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 1.25rem 2rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view {
  flex: 1;
}
</style>
