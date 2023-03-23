<template>
  <div v-if="!joined" class="container">
    <div class="name-container">
      <input type="text" class="user-name" placeholder="Никнейм" v-model="currentUser" />
      <button class="join-button" v-on:click="join">В чат</button>
    </div>
  </div>
  <div v-if="joined" class="chat-container">
    <div class="list-container">
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}
      </div>
    </div>
    <div class="text-input-container">
      <textarea v-model="text" class="text-message" placeholder="Написать сообщения..."
        v-on:keyup.enter="sendMessage"></textarea>
    </div>
  </div>
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
.container {
  display: flex;
  justify-content: center;
  padding-top: 150px;
  min-height: 580px;
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

.text-message {
  width: 99%;
  height: 30px;
  border-width: 2px;
  background-color: rgba(255, 255, 255, 0.164);
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  font-size: medium;
}

.list-container {
  margin-left: 10px;
  margin-right: 10px;
  font-size: large;
}

.chat-container {
  min-height: 600px;
  background-color: rgba(255, 255, 255, 0.699);
}
</style>

