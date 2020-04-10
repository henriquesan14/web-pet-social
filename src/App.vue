<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html,
body,
#root {
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
}
body,
input,
button {
  font-family: 'Lato', sans-serif !important;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0 !important;
}
button {
  cursor: pointer;
}
</style>
