<template>
  <div>
    usename:
    <input type="text" v-model="usename" />
    password:
    <input type="text" v-model="password" />
    <h4>{{usename}}</h4>
    <h4>{{password}}</h4>
    <button @click="submit">登录</button>
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
      let that = this;
      axios.get(`http://localhost:8888/Login?id=${that.usename}`).then(res => {
        // window.console.log(res.data);
        window.console.log(res.data);
        for (let index = 0; index < res.data.length; index++) {
          if (res.data[index].usename == this.usename) {
            if (res.data[index].password == this.password) {
              alert("密码正确，登录成功");
            }
          }
        }
      });
    }
  }
};
</script>

<style >
</style>
