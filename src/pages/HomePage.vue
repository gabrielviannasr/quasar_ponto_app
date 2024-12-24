<template>
  <div class="home-page">
    <!-- Círculo com o ícone do usuário -->
    <div
      class="circle"
      style="
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #003366;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto 5px; /* Margem inferior reduzida */
      "
    >
      <q-img
        src="~assets/User.png"
        alt="User Icon"
        style="width: 90px; height: 90px; object-fit: cover; display: block"
      />
    </div>

    <!-- Texto de saudação -->
    <div class="greeting">
      <!-- <h1>Olá, Alan Amaral!!</h1> -->
      <div
        class="q-mt-xs"
        style="
          font-family: 'Roboto Slab', serif;
          font-weight: bold;
          font-size: 24px;
          color: #003366;
        "
      >
        Olá Alan Amaral!
      </div>
      <p>Confirmar seu registro?</p>
    </div>

    <!-- Relógio com ícone -->
    <div class="clock-container">
      <q-img
        src="~assets/icons/Clock.png"
        alt="Clock Icon"
        style="width: 35px; height: 35px; margin-right: 8px"
      />
      <span class="current-time">{{ currentTime }}</span>
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
  font-size: 20px; /* Reduzi o tamanho da fonte */
  font-family: "Roboto Slab", serif;
  color: #003366;
  margin: 0px 0 3px; /* Reduzi os espaçamentos */
}

.greeting p {
  font-size: 16px; /* Reduzi o tamanho da fonte */
  color: #003366;
  margin-bottom: 8px; /* Menor margem inferior */
}

.clock-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px; /* Reduzi o tamanho da fonte */
  font-family: "Roboto", sans-serif;
  color: #003366;
  margin-bottom: 8px; /* Menor margem inferior */
}

.camera-container {
  width: 90%;
  margin: 0 auto 15px; /* Menor margem inferior */
  padding: 8px; /* Menor padding */
  border: 2px dashed #cccccc;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px; /* Reduzi a altura */
}

.camera-placeholder {
  font-size: 16px; /* Reduzi o tamanho da fonte */
  color: #aaaaaa;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 16px; /* Reduzi o tamanho da fonte */
}
</style>
