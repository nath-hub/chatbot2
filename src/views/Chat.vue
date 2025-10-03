<template>
  <div class="chat-container">
    <div class="messages">
      <ChatMessage v-for="msg in messages" :key="msg.id" :role="msg.role" :content="msg.content" />
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Posez votre question juridique..." />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import ChatMessage from '../components/ChatMessage.vue';
import api from '../services/api';

export default {
  components: { ChatMessage },
  data() {
    return {
      messages: [],
      newMessage: '',
      conversationId: null
    };
  },
  async mounted() {
    const res = await api.post('/chat/conversations');
    this.conversationId = res.data.conversationId;
  },
  methods: {
    async sendMessage() {
      if (!this.newMessage.trim()) return;
      
      this.messages.push({ role: 'user', content: this.newMessage });
      
      try {
        const res = await api.post('/chat/messages', {
          conversationId: this.conversationId,
          message: this.newMessage
        });
        this.messages.push({ role: 'assistant', content: res.data.message });
        this.newMessage = '';
      } catch (error) {
        alert(error.response?.data?.error || 'Erreur');
      }
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}
.messages {
  height: 500px;
  overflow-y: auto;
  margin-bottom: 1rem;
}
form {
  display: flex;
  gap: 1rem;
}
input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 0.8rem 2rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>