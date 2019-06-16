<template>
  <div id="app">
    <div id="nav">
      <v-toolbar app>
        <v-toolbar-title>Desafio CooperSystem</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <router-link to="/pedidos"  class="pt-4"><v-btn flat>Pedidos</v-btn></router-link>
          <router-link to="/produtos" class="pt-4"><v-btn flat>Produtos</v-btn></router-link>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
