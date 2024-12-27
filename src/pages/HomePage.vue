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

    <!-- Área para a câmera -->
    <div class="camera-container" id="cameraPreview">
      <!-- O plugin renderiza a visualização da câmera aqui -->
    </div>

    <!-- Botão de confirmar -->
    <q-btn
      no-caps
      label="Confirmar"
      color="primary"
      unelevated
      class="confirm-button"
      @click="captureImage"
    />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";

export default {
  name: "HomePage",
  setup() {
    const startCameraPreview = () => {
      console.log("Iniciando pré-visualização da câmera...");

      window.CameraPreview.startCamera({
        x: 10,
        y: 200,
        width: 300,
        height: 300,
        camera: "front", // Define para a câmera frontal
        toBack: false,
        tapPhoto: false,
        previewDrag: false,
        storeToFile: false,
        disableExifHeaderStripping: true,
      });
    };

    const stopCameraPreview = () => {
      window.CameraPreview.stopCamera();
      console.log("Pré-visualização da câmera finalizada.");
    };

    const captureImage = () => {
      console.log("Capturando imagem...");

      window.CameraPreview.takePicture(
        (imageData) => {
          console.log("Imagem capturada com sucesso!");
          const base64Image = "data:image/jpeg;base64," + imageData;
          // Exiba ou armazene a imagem capturada
          alert("Imagem capturada!");
        },
        (error) => {
          console.error("Erro ao capturar imagem:", error);
        }
      );
    };

    onMounted(() => {
      startCameraPreview();
    });

    onUnmounted(() => {
      stopCameraPreview();
    });

    return {
      captureImage,
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

.camera-container {
  width: 300px; /* Largura do quadrado da câmera */
  height: 300px; /* Altura do quadrado da câmera */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
}
</style>
