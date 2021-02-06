<template>
  <div id="siteHeader">
    <h1>Christopher Sherman's Website</h1>
    <p>
      Undergraduate Teaching Assistant for the Dept. of Computer Science,
      Illinois Institute of Technology
    </p>
    <p> Email: csherman1@hawk.iit.edu</p>
    <a @click="go('CS331')">CS331</a> | <a @click="go('CS351')">CS351</a>
  </div>
</template>

<script>
export default {
  name : 'Header',
  methods: {
    go(routeName) {
      if(this.$route.name != routeName)
      this.$router.push({name: routeName});
    }
  }
}
</script>

<style>

#siteHeader {
  border-bottom: 5px solid black;
}

</style>