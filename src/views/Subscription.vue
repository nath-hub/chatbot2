<template>
  <div class="container">
    <div v-if="subscription">
      <h2>Votre Abonnement</h2>
      <p>Expire le : {{ new Date(subscription.end_date).toLocaleDateString() }}</p>
      <p :class="isActive ? 'active' : 'expired'">
        {{ isActive ? 'Actif' : 'Expiré' }}
      </p>
      <button v-if="!isActive" @click="renew">Renouveler (9.99€/mois)</button>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return { subscription: null };
  },
  computed: {
    isActive() {
      return this.subscription && new Date(this.subscription.end_date) > new Date();
    }
  },
  async mounted() {
    const res = await api.get('/subscription');
    this.subscription = res.data;
  },
  methods: {
    async renew() {
      await api.post('/subscription/renew');
      alert('Abonnement renouvelé !');
      location.reload();
    }
  }
};
</script>

<style scoped>
.active { color: green; font-weight: bold; }
.expired { color: red; font-weight: bold; }
</style>