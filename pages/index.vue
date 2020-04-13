<template>
  <div class="index">
    <div class="index__project-list">
      <Project
        v-for="project in projectList"
        :key="project.id"
        :data="project"
        class="index__project"
      />
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
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
  beforeMount () {
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
.index {
  &__project-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  &__project {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    max-width: 700px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
