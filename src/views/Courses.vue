<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="dataApi" class="content">
        <div>
          <h1>{{ dataApi.titulo }}</h1>
          <p>{{ dataApi.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in dataApi.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'curso', params: { curso: curso.id } }"
                >{{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas</router-link
              >
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "courses",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
</style>