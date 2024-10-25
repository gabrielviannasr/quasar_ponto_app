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
        @click="abrirConfirmacao"
      />
    </div>

    <!-- Diálogo de confirmação -->
    <q-dialog v-model="confirmDialog">
      <q-card>
        <q-card-section class="text-h6"> Confirmar Registro </q-card-section>

        <q-card-section> Deseja registrar o ponto agora? </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn
            flat
            label="Confirmar"
            color="primary"
            @click="registrarPonto"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Lista de pontos registrados -->
    <div class="q-mt-xl">
      <div class="text-center">Últimos pontos registrados hoje</div>
      <q-scroll-area style="height: 300px">
        <q-list bordered separator>
          <!-- Exibe os pontos na ordem inversa -->
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
      confirmDialog: false, // Controle do diálogo de confirmação
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
    abrirConfirmacao() {
      this.confirmDialog = true;
    },
    registrarPonto() {
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
