export default {
  data() {
    return {
      loading: true,
      dataApi: null,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.dataApi = null;
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.dataApi = r;
            this.loading = false;
          }, 1000);
        });
    },
  },
};
