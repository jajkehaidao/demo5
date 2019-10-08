<template>
  <div>
    usename:
    <input type="text" v-model="usename" />
    password:
    <input type="text" v-model="password" />
    <h4>{{usename}}</h4>
    <h4>{{password}}</h4>
    <button @click="submit">注册</button>
  </div>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      usename: "",
      password: ""
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:8888/register", {
          usename: this.usename,
          password: this.password
        })
        .then(res => {
          window.console.log(res);
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>

<style >
</style>
