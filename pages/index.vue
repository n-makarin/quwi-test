<template>
  <div class="index">
    index
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },
  middleware: 'auth',
  computed: {
    ...mapGetters({
      projectList: 'project/list/data'
    }),
    token () {
      return this.$cookies.get('token')
    }
  },
  mounted () {
    this.getProjectList(this.token)
  },
  methods: {
    ...mapActions({
      getProjectList: 'project/list/get'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
