<template>
  <div :class="['message', role]">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ['role', 'content']
};
</script>

<style scoped>
.message {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  max-width: 70%;
}
.user {
  background: #3498db;
  color: white;
  margin-left: auto;
}
.assistant {
  background: #ecf0f1;
}
</style>