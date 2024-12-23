<template>
  <q-page class="q-pa-md login-page">
    <div class="content">
      <!-- Logo e Título -->
      <q-img src="~assets/logo_app.png" alt="Logo do App" class="logo-app" />

      <div class="title q-px-md">
        Sistema de Identificação de Registro<br />
        Eletrônico do Estado do Pará
      </div>

      <!-- Texto central e inputs -->
      <div class="login-container q-gutter-sm">
        <div class="login-title">Faça seu login</div>

        <q-input
          standout="bg-cyan"
          v-model="model.cpf"
          placeholder="Insira seu CPF"
          input-class="text-white text-center"
          class="bg-blue-10"
        />

        <q-input
          standout="bg-cyan"
          placeholder="Insira sua senha"
          v-model="model.senha"
          type="password"
          input-class="text-white text-center"
          class="bg-blue-10"
        />

        <q-btn
          push
          no-caps
          label="Entrar"
          color="primary"
          style="width: 60%; font-size: 16px"
          @click="handleLogin"
        />

        <div class="forgot-password">
          <span>Esqueceu sua senha?</span><br />
          <span class="recover-link">Recuperar minha senha!</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <img
        src="~assets/logo_prodepa.png"
        alt="Logo Prodepa"
        class="logo-prodepa"
      />
      <div class="footer-text">
        © 2024 Prodepa. Todos os direitos reservados.
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      model: {
        cpf: "",
        senha: "",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log("Tentando logar com CPF:", this.cpf);
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
}

.content {
  text-align: center;
}

.logo-app {
  width: 180px;
  margin-bottom: 16px;
  margin-top: 50px;
}

.title {
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  color: #003366;
  margin-bottom: 80px;
}

.login-container {
  width: 100%;
  max-width: 300px;
}

.login-title {
  font-family: "Roboto Flex", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #003366;
  margin-bottom: 8px;
}

/* .input-field {
  background-color: #003366;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
}

.login-button {
  background-color: #4a90e2;
  color: #ffffff;
  font-size: 16px;
  width: 60%;
  margin-top: 8px;
} */

.forgot-password {
  font-size: 12px;
  color: #003366;
  margin-top: 16px;
}

.recover-link {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.footer {
  text-align: center;
}

.logo-prodepa {
  width: 120px;
  margin-bottom: 8px;
}

.footer-text {
  font-size: 14px;
  color: #003366;
}
</style>
