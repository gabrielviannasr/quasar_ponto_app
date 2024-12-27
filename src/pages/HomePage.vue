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

    <!-- Área para a câmera -->
    <div id="camera-container" class="camera-container"></div>

    <!-- Botão de confirmar -->
    <q-btn
      no-caps
      label="Confirmar"
      color="primary"
      unelevated
      class="confirm-button"
      @click="capturePhoto"
    />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "HomePage",
  setup() {
    const currentTime = ref("");

    // Atualiza o horário
    const updateCurrentTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    // Configuração da câmera
    const initializeCameraPreview = () => {
      const container = document.getElementById("camera-container");
      const rect = container.getBoundingClientRect();

      // Inicia a câmera no formato quadrado
      CameraPreview.startCamera({
        x: rect.x,
        y: rect.y,
        width: rect.width, // A largura do quadrado
        height: rect.height, // A altura do quadrado
        camera: CameraPreview.CAMERA_DIRECTION.FRONT,
        toBack: false,
        tapPhoto: false,
        previewDrag: false,
      });
    };

    const stopCameraPreview = () => {
      CameraPreview.stopCamera();
    };

    const capturePhoto = () => {
      CameraPreview.takePicture({ quality: 85 }, (data) => {
        console.log("Foto capturada: ", data);
      });
    };

    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); // Atualiza o horário a cada segundo
      initializeCameraPreview(); // Inicia a câmera
    });

    onBeforeUnmount(() => {
      stopCameraPreview(); // Para a câmera ao sair da página
    });

    return {
      currentTime,
      capturePhoto,
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
  width: 250px; /* Ajuste a largura do quadrado da câmera */
  height: 250px; /* Ajuste a altura do quadrado da câmera */
  margin: 0 auto 15px;
  position: relative;
  overflow: hidden;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
}
</style>
