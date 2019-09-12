<template>
  <div class="houses container-fluid">
    <div class="row">
      <house v-for="house in houses" :houseProp="house" :key="house._id" />
    </div>
  </div>
</template>


<script>
import House from "../components/House";
export default {
  name: "houses",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {},
  components: { House }
};
</script>


<style scoped>
</style>