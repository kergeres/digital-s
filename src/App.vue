<template>
  <div id="app">
    <div id="nav">
      <div class="divi">
        <router-link to="/">Create</router-link>
        <router-link to="/about">Delete/Edit</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f1f1f4;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}
h1 {
  margin-top: 40px;
  color: #393b2c;
}
#nav {
  height: 50px;
  background-color: #434534;
  text-align: center;
  display: flex;
}

.divi {
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;

  right: 50px;
  height: auto;
}

#nav a {
  font-weight: bold;
  color: #f1f1f4;
  margin: 25px 15px 5px 15px;
  transform: translateY(-50%);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #abad9a;
}
</style>
