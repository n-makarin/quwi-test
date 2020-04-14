<template>
  <div class="header">
    <nuxt-link to="/" class="header__logo">
      Q
    </nuxt-link>
    <div v-if="authorized" class="header__logout" @click="logout">
      logout
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    authorized () {
      return this.$store.getters['auth/authorized']
    }
  },
  watch: {
    authorized (val) {
      if (this.authorized) { return }
      this.$router.push('/login')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(
        'auth/logout',
        this.$store.getters['auth/token']
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
    box-shadow: 0px 0px 1px 2px #a2a2a2;
  &__logo {
    font-weight: bold;
    font-size: 30px;
    color: black;
    text-decoration: none;
  }
  &__logout {
    text-transform: uppercase;
    color: gray;
    cursor: pointer;
    margin-right: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
