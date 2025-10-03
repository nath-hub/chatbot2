<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2>Connexion</h2>
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
      <router-link to="/register">Créer un compte</router-link>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return { email: '', password: '' };
  },
  methods: {
    async login() {
      try {
        const res = await api.post('/auth/login', { email: this.email, password: this.password });
        localStorage.setItem('token', res.data.token);
        this.$router.push('/chat');
      } catch (error) {
        alert('Erreur de connexion');
      }
    }
  }
};
</script>