<template>
  <div id="app">
    <person v-for="(person, index) in people" :firstName="person.firstName" :age="person.age" :key="index">
    </person>
  </div>
</template>

<script>
import Person from './components/Person';
export default {
  name: 'App',
  components: {
    Person
  },
  data() {
    return {
      people: [
        { firstName: 'john', age: 71 },
        { firstName: 'lesley', age: 68},
        { firstName: 'kate', age: 37 },
        { firstName: 'nik', age: 36 }
      ]
    }
  }
}
</script>

<style>
html {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
