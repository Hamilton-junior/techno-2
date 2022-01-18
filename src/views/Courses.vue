<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="dataApi">
      <h1>Cursos</h1>
      {{dataApi}}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';
export default {
  name: 'courses',
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
}
</script>

<style>

</style>