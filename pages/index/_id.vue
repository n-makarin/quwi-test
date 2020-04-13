<template>
  <div class="project-id" @click.self="$router.push('/')">
    <Project class="project-id__item" :data="project" :edit="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  middleware: 'auth',
  computed: {
    ...mapGetters({
      project: 'project/data'
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.project-id {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.44);
  &__item {
    width: 100%;
    max-width: 800px;
  }
}
</style>
