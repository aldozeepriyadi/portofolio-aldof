  <template>
    <div id="app">
      <HeaderComponent />
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/projects" class="nav-link">Projects</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view />
    </div>
  </template>

  <script>
  import HeaderComponent from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
    },
  };
  </script>

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  </style>
