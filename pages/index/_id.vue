<template>
  <div class="project-id" @click.self="$router.push('/')">
    <div class="project-id__item">
      <Project :data="project" :edit="true" />
      <div class="project-id__save">
        <div v-if="error.visible" class="project-id__error">
          {{ error.text }}
        </div>
        <button class="project-id__btn" @click="save">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Project from '~/components/Project.vue'

export default {
  components: {
    Project
  },
  middleware: 'projectItem',
  data () {
    return {
      error: {
        visible: false,
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      project: 'project/data'
    })
  },
  methods: {
    async save () {
      let error
      await this.$store.dispatch('project/edit', {
        project: this.project,
        token: this.$store.getters['auth/token']
      })
        .catch((err) => {
          error = err
        })
      if (error) {
        this.setError(error)
        return
      }
      this.hideError()
      this.$store.dispatch('project/list/edit', this.project)
      this.$router.push('/')
    },
    setError (error) {
      this.error = {
        visible: true,
        text: `Error: ${error.response.status}`
      }
    },
    hideError () {
      this.error = {
        visible: false,
        text: ''
      }
    }
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
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
  }
  &__save {
    display: flex;
    align-items: center;
    padding: 5px 22px 20px;
  }
  &__error {
    font-size: 14px;
    color: red;
  }
  &__btn {
    margin-left: auto;
    text-transform: uppercase;
    padding: 7px 25px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
  }
}
</style>
