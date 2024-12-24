<template>
  <q-page class="q-pa-md">
    <!-- Relógio -->
    <div class="q-pt-xl q-mt-xl text-h4 text-center">{{ currentTime }}</div>

    <!-- Botão de registro -->
    <div class="q-pt-xl text-center">
      <q-btn
        class="q-mt-md"
        label="Registrar Ponto"
        color="primary"
        :disable="isRegistering || !canRegister"
        @click="confirmarRegistro"
      />
    </div>

    <!-- Lista de pontos registrados -->
    <div class="q-mt-xl">
      <div class="text-center">Últimos pontos registrados hoje</div>
      <q-scroll-area style="height: 200px">
        <q-list bordered separator>
          <q-item v-for="ponto in pontosReversos" :key="ponto.id">
            <q-item-section>{{ ponto.horario }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      currentTime: "", // Relógio
      pontos: [], // Lista de pontos registrados no dia
      isRegistering: false, // Controla se o botão está desabilitado
      canRegister: true, // Verifica se pode registrar no minuto atual
      lastRegisterTime: null, // Armazena o último horário de registro
    };
  },
  computed: {
    pontosReversos() {
      return [...this.pontos].reverse();
    },
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      if (
        this.lastRegisterTime &&
        !this.isSameMinute(now, this.lastRegisterTime)
      ) {
        this.canRegister = true;
      }
    },
    confirmarRegistro() {
      console.log("confirmarRegistro");

      this.$q
        .dialog({
          title: "Confirmação",
          message: "Deseja registrar o ponto?",
          ok: {
            label: "Sim",
            color: "primary",
          },
          cancel: {
            label: "Não",
            color: "negative",
          },
        })
        .onOk(() => {
          this.abrirCamera();
        });
    },

    abrirCamera() {
      console.log("abrirCamera");

      navigator.camera.getPicture(
        (imageData) => {
          this.registrarPonto(imageData); // Registra o ponto e armazena a imagem
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
          cameraDirection: Camera.Direction.FRONT, // Câmera frontal para selfie
        }
      );
    },

    registrarPonto(imageData) {
      const now = new Date();
      if (
        this.lastRegisterTime &&
        this.isSameMinute(now, this.lastRegisterTime)
      ) {
        this.canRegister = false;
        return;
      }
      this.isRegistering = true;
      setTimeout(() => {
        this.pontos.push({
          id: this.pontos.length,
          horario: now.toLocaleString(),
          selfie: imageData, // Armazena a selfie junto com o registro
        });
        this.lastRegisterTime = now;
        this.isRegistering = false;
        this.canRegister = false;
      }, 2000);
    },
    isSameMinute(date1, date2) {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate() &&
        date1.getHours() === date2.getHours() &&
        date1.getMinutes() === date2.getMinutes()
      );
    },
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>
