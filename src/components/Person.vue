<template>
  <div class="person">
    <h1>{{firstNameFormatted}}</h1>
    <h2>{{age}}</h2>
    <h3 class='reversedName'>{{reversedName}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    firstName: String, 
    age: Number
  },
  computed: {
    reversedName: function() {
      return this.firstName.split('').reverse().join('');
    },
    firstNameFormatted: function() {
      const result = this.firstName[0].toUpperCase() + this.firstName.split('').splice(1).join('');
      return result;
    }
  }
}
</script>

<style scoped>
.person {
  border: 1px solid red;
}
</style>