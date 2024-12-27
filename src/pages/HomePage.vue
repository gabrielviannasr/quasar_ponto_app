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
        margin: 10px auto 5px;
      "
    >
      <q-img
        src="~assets/User.png"
        alt="User Icon"
        style="width: 80px; height: 80px; object-fit: cover; display: block"
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
        style="width: 35px; height: 35px; margin-right: 8px"
      />
      <span class="current-time">{{ currentTime }}</span>
    </div>

    <!-- Preview da câmera -->
    <div id="camera-container" class="camera-container"></div>

    <!-- Botão de confirmar -->
    <q-btn
      no-caps
      label="Confirmar"
      color="primary"
      unelevated
      class="confirm-button"
      @click="confirmRegister"
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

    const startCameraPreview = () => {
      const cameraContainer = document.getElementById("camera-container");

      if (window.CameraPreview) {
        // Configuração para iniciar a câmera no container correto
        CameraPreview.startCamera({
          x: cameraContainer.offsetLeft,
          y: cameraContainer.offsetTop,
          width: cameraContainer.offsetWidth,
          height: cameraContainer.offsetHeight,
          camera: CameraPreview.CAMERA_DIRECTION.FRONT,
          toBack: false,
          previewDrag: false,
          tapPhoto: false,
        });

        console.log("Camera Preview iniciado!");
      } else {
        console.error("Camera Preview não está disponível.");
      }
    };

    const confirmRegister = () => {
      console.log("Registro confirmado!");
    };

    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); // Atualiza o horário a cada segundo

      // Inicia a câmera no container designado
      startCameraPreview();
    });

    return {
      currentTime,
      confirmRegister,
    };
  },
};
</script>

<style scoped>
.home-page {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
}

.greeting h1 {
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  color: #003366;
  margin: 5px 0 3px;
}

.greeting p {
  font-size: 16px;
  color: #003366;
  margin-bottom: 8px;
}

.clock-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-family: "Roboto", sans-serif;
  color: #003366;
  margin-bottom: 8px;
}

.camera-container {
  width: 90%;
  margin: 0 auto 15px;
  background-color: #f9f9f9;
  height: 250px;
  border: 2px dashed #cccccc;
  position: relative; /* Para alinhar a câmera corretamente */
  overflow: hidden;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
}
</style>
