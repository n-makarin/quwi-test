<template>
  <div class="project">
    <img class="project__logo" :src="data.logo_url">

    <nuxt-link
      v-if="!edit"
      :to="`${data.id}`"
      class="project__name"
      @click.native="selectProject"
    >
      {{ data.name }}
    </nuxt-link>
    <input
      v-else
      v-model="name"
      class="project__name input"
    >

    <div :class="['project__status', { active: data.is_active }]">
      {{ data.is_active ? 'Active' : 'Not active' }}
    </div>
    <div class="project__activity">
      <div class="project-activity__item">
        <span>time this week</span>
        <span>{{ getTime(data.spent_time_week) }}</span>
      </div>
      <div class="project-activity__item">
        <span>this month</span>
        <span>{{ getTime(data.spent_time_month) }}</span>
      </div>
      <div class="project-activity__item">
        <span>total</span>
        <span>{{ getTime(data.spent_time_all) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: this.data.name
    }
  },
  methods: {
    getTime (seconds) {
      const time = moment('2015-01-01').startOf('day')
        .seconds(seconds)
        .format('H:mm:ss')
      return time
    },
    selectProject () {
      this.$store.dispatch('project/set', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  border: 1px solid #ececec;
  border-radius: 5px;
  background: white;
  &__logo {
    max-width: 70px;
    margin-right: 15px;
  }
  &__name {
    font-weight: bold;
    flex-grow: 1;
    cursor: pointer;
    color: black;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
      text-decoration: underline;
    }
    &.input {
      padding: 7px 3px;
      cursor: inherit;
      font-weight: normal;
      &:hover {
        text-decoration: none;
      }
    }
  }
  &__status {
    flex-grow: 1;
    color: red;
    font-weight: bold;
    margin-right: 20px;
    &.active {
      color: green;
    }
  }
  &-activity {
    &__item {
      display: flex;
      margin-bottom: 7px;
      &:last-child {
        margin-bottom: 0;
      }
      span:first-child {
        margin-right: 20px;
      }
      span:last-child {
        font-weight: bold;
        margin-left: auto;
      }
    }
  }
}
</style>
