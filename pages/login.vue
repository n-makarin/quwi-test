<template>
  <div class="login">
    <div class="login__container">
      <div class="login__title">
        login
      </div>
      <form type="submit" class="login__form" @submit="login">
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button class="login__btn" type="submit">
          login
        </button>
      </form>
      <div v-if="error.visible" class="login__error">
        {{ error.text }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      error: {
        visible: false,
        text: ''
      }
    }
  },
  computed: {
    authorized () {
      return this.$store.getters['auth/authorized']
    }
  },
  methods: {
    async login () {
      event.preventDefault()
      this.validateData()
      if (this.error.visible) {
        return
      }
      const self = this
      await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
      if (self.authorized) {
        self.$router.push('/')
        return
      }
      self.error = {
        visible: true,
        text: 'Incorrect email or password'
      }
    },
    validateData () {
      if (!this.email || !this.password) {
        this.error = {
          visible: true,
          text: 'Enter email and password'
        }
        return
      }
      this.error = {
        visible: false,
        text: ''
      }
    }
  },
  afterUpdate () {
    if (this.authorized) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  &__container {
    max-width: 350px;
    margin: 50px auto 0;
    padding: 20px 40px;
    background: #f4f4f4;
  }
  &__title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__form {
    input {
      width: 100%;
      padding: 7px 5px;
      margin-bottom: 10px;
    }
  }
  &__btn {
    margin-top: 5px;
    text-transform: uppercase;
    background: #3e5375;
    color: white;
    padding: 7px 25px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }
  }
  &__error {
    color: #ca0000;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
