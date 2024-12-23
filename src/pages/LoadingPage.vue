<template>
  <q-page class="splash-page">
    <div class="logo-container">
      <q-img
        src="~assets/logo_app.png"
        alt="Logo do App"
        class="logo"
        :class="{ 'fade-in': showLogo }"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showLogo: false, // Controla quando exibir a imagem com a transição
    };
  },
  mounted() {
    // Atraso antes de mostrar a imagem
    setTimeout(() => {
      this.showLogo = true;
    }, 1000); // Mantém a tela branca por 1 segundo

    // Redireciona para a página de login após 3 segundos
    setTimeout(() => {
      this.$router.push("/login");
    }, 5000);
  },
};
</script>

<style scoped>
.splash-page {
  background-color: #ffffff; /* Tela inicial branca */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 180px;
  opacity: 0;
  transition: opacity 2s ease-in; /* Tempo da transição para exibir a imagem */
}

.fade-in {
  opacity: 1;
}
</style>
