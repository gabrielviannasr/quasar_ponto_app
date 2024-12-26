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
    <div class="camera-container">
      <div class="camera-placeholder">
        <!-- Exibição da prévia da imagem capturada -->
        <img
          v-if="capturedImage"
          :src="'data:image/jpeg;base64,' + capturedImage"
          alt="Foto Capturada"
          class="captured-image"
        />
        <!-- Placeholder caso nenhuma imagem tenha sido capturada -->
        <p v-else>Câmera Frontal</p>
      </div>
    </div>

    <!-- Botão de confirmar -->
    <q-btn
      no-caps
      label="Confirmar"
      color="primary"
      unelevated
      class="confirm-button"
      @click="openCamera"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "HomePage",
  setup() {
    const currentTime = ref("");
    const capturedImage = ref(null); // Armazena a imagem capturada

    const updateCurrentTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    const openCamera = () => {
      console.log("Abrindo câmera frontal...");
      navigator.camera.getPicture(
        (imageData) => {
          capturedImage.value = imageData; // Salva a imagem capturada
          console.log("Imagem capturada com sucesso!");
        },
        (error) => {
          console.error("Erro ao capturar imagem: ", error);
        },
        {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          correctOrientation: true,
          cameraDirection: Camera.Direction.FRONT, // Câmera frontal
        }
      );
    };

    onMounted(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000); // Atualiza o horário a cada segundo
    });

    return {
      currentTime,
      capturedImage,
      openCamera,
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
  margin: 5px 0 3px; /* Reduzi os espaçamentos */
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

.captured-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.confirm-button {
  width: 80%;
  margin: 0 auto;
  font-size: 16px; /* Reduzi o tamanho da fonte */
}
</style>
