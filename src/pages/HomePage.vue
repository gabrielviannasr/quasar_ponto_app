<template>
  <div class="home-page">
    <!-- Círculo com o ícone do usuário -->
    <div
      class="circle"
      style="
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #003366;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
      "
    >
      <q-img
        src="~assets/User.png"
        alt="User Icon"
        style="width: 100px; height: 100px; object-fit: cover; display: block"
      />
    </div>

    <!-- Texto de saudação -->
    <div class="greeting">
      <h1>Olá, Alan Amaral!</h1>
      <p>Confirmar seu registro?</p>
    </div>

    <!-- Relógio com ícone -->
    <div class="clock-container">
      <q-img
        src="~assets/icons/Clock.png"
        alt="Clock Icon"
        style="width: 40px; height: 40px; margin-right: 8px"
      />
      <span class="current-time">{{ currentTime }}</span>
      <!-- Exibe o horário dinâmico -->
    </div>

    <!-- Área para a câmera -->
    <div class="camera-container">
      <div class="camera-placeholder">
        <!-- Substitua este bloco pelo componente de câmera no futuro -->
        <p>Câmera Frontal</p>
      </div>
    </div>

    <!-- Botão de confirmar -->
    <q-btn
      no-caps
      label="Confirmar"
      color="primary"
      unelevated
      class="confirm-button"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "HomePage",
  setup() {
    const currentTime = ref("");

    const updateCurrentTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); // Atualiza o horário a cada segundo
    });

    return {
      currentTime,
    };
  },
};
</script>

<style>
.home-page {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
}

.greeting h1 {
  font-size: 24px;
  font-family: "Roboto Slab", serif;
  color: #003366;
  margin: 0 0 0;
}

.greeting p {
  font-size: 18px;
  color: #003366;
  margin-bottom: 10px;
}

.clock-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  color: #003366;
  margin-bottom: 10px;
}

.camera-container {
  width: 90%;
  margin: 0 auto 20px;
  padding: 10px;
  border: 2px dashed #cccccc;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.camera-placeholder {
  font-size: 18px;
  color: #aaaaaa;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
}
</style>
