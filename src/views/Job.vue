<template>
  <div class="job">
    Job Details
    <h4>{{job.jobTitle}}</h4>
    <h5>{{job.company}}</h5>
    <h5>{{job.hours}}</h5>
    <p>{{job.description}}</p>
    <h5>{{job.rate}}</h5>
  </div>
</template>


<script>
export default {
  name: "job",
  data() {
    return {};
  },
  mounted() {
    //we do this so we can pull multiple ids if we need to. 
    //Other option includes just this in the mounted function: this.$store.dispatch("getJobById", this.$route.params.jobId)
    let data = {
      jobId: this.$route.params.jobId
    };
    this.$store.dispatch("getJobById", data);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>