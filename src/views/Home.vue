<template>
  <div>
    <h1>Home</h1>
    {{dataApi}}
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
}
</script>

<style>

</style>