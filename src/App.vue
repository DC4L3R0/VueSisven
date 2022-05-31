<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <router-link to="/client">Client</router-link>
    <div class="nav navbar-nav">
   <router-link to="/categories">Categories</router-link>
    </div>
    <div class="nav navbar-nav">
   <router-link to="/mode_payment">Mode Payment</router-link>
    </div>
    <div class="nav navbar-nav">
<router-link to="/products">Products</router-link> 
    </div>
    <div class="nav navbar-nav">
<router-link to="/about">About</router-link>
</div>
<div class="nav navbar-nav">
<router-link to="/">Home</router-link> 
</div>
    
  </nav>
  <br/>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
