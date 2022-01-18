<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="dataApi">
      <h1>Contato</h1>
    {{dataApi}}
    </div>
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