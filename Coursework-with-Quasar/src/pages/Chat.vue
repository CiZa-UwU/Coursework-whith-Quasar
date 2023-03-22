<template>

  <q-page>
    
<div v-if="!joined" class="parent-container">
    <div class="name-container">
      <input type="text" class="user-name" placeholder="Никнейм" v-model="currentUser" />
      <button class="join-button" v-on:click="join">В чат</button>
    </div>
  </div>
  <div v-if="joined">
    <div class="list-container">
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}
      </div>
    </div>
    <div class="text-input-container">
      <textarea v-model="text" class="text-message" v-on:keyup.enter="sendMessage"></textarea>
    </div>
  </div>

  </q-page>
  
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      joined: false,
      currentUser: "",
      text: "",
      messages: [],
    };
  },
  methods: {
    join() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");
      this.socketInstance.on(
        "message:received", (data) => {
          this.messages = this.messages.concat(data);
        }
      )
    },
    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser,
      };
      this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
  },
  name: "ChatApp",
};
</script>

<style scoped>
.parent-container {
  display: flex;
  justify-content: center;
  padding-top: 150px;
}

.name-container {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.user-name {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
}

.join-button {
  height: 30px;
  font-size: 20px;
}

.text-input-container {
  height: 100vh;
}

.text-message {
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 35px;
  border-width: 5px;
  background-color: rgba(1, 122, 116, 0.459);
}
</style>
