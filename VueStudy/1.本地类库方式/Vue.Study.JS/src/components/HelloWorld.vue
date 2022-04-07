<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ city }}</span>
    <div>{{ sayHello() }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      city: "QingDao",
      mySchool: "No.1 Middle School",
    };
  },
  methods: {
    sayHello() {
      return `我在${this.city}市！`;
    },
  },

  props: {
    msg: String,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
