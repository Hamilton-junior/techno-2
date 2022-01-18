<template>
  <div>
    <h1>Contato</h1>
    {{dataApi}}
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';
export default {
  name: "contact",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
}
</script>

<style>

</style>