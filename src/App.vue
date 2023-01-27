<template>
  <router-view/>

  <img class="logo" src="./assets/logo.png" alt="Logo">
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo{
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
}
</style>
