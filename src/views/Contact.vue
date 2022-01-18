<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="dataApi">
        <h1>{{ dataApi.titulo }}</h1>
        <p>{{ dataApi.descricao }}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{ dataApi.contato.email }}
          </li>
          <li>
            <b>Telefone:</b>
            {{ dataApi.contato.telefone }}
          </li>
          <li>
            <b>Endereço:</b>
            {{ dataApi.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "contact",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style>
</style>