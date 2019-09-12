<template>
  <div id="create-job-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Job Listing!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addJob()">
            <div class="form-group">
              <label for="jobTitle">Job Title</label>
              <input
                type="text"
                class="form-control"
                id="jobTitle"
                placeholder="Enter jobTitle"
                v-model="newJob.jobTitle"
                required
              />
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                class="form-control"
                id="company"
                placeholder="Enter company"
                v-model="newJob.company"
              />
            </div>
            <div class="form-group">
              <label for="rate">Rate</label>
              <input
                type="number"
                class="form-control"
                id="rate"
                placeholder="Enter rate"
                v-model="newJob.rate"
              />
            </div>
            <div class="form-group">
              <label for="hours">Hours</label>
              <input
                type="number"
                class="form-control"
                id="hours"
                placeholder="Enter hours"
                v-model="newJob.hours"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Enter description"
                v-model="newJob.description"
              />
            </div>
            <button type="submit" class="btn btn-primary">List Job</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-job-modal",
  data() {
    return {
      newJob: {}
    };
  },
  computed: {},
  methods: {
    addJob() {
      this.$store.dispatch("addJob", this.newJob);
      this.newJob = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>