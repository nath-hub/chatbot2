<template>
  <nav class="navbar">
    <h1>Chatbot Juridique</h1>
    <div>
      <router-link to="/chat">Chat</router-link>
      <router-link to="/subscription">Abonnement</router-link>
      <button @click="logout">Déconnexion</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}
.navbar button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
</style>