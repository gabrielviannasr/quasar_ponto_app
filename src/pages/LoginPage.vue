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
          mask="###.###.###-##"
        />

        <q-input
          v-model="model.senha"
          placeholder="Insira sua senha"
          standout="bg-cyan"
          input-class="text-white text-center"
          class="bg-blue-10"
          style="padding-left: 35px"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn
          push
          no-caps
          label="Entrar"
          color="primary"
          style="width: 60%; font-size: 16px"
          @click="handleLogin"
        />

        <div class="forgot-password-container">
          <div class="forgot-password">
            <span>Ainda não tem conta?</span><br />
            <router-link class="recover-link" to="/register">
              Fazer meu registro!
            </router-link>
          </div>

          <div class="forgot-password">
            <span>Esqueceu sua senha?</span><br />
            <router-link class="recover-link" to="/recover">
              Recuperar minha senha!
            </router-link>
          </div>
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
      isPwd: true, // Show and hide the password
      model: {
        cpf: "",
        senha: "",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log("Tentando logar com CPF:", this.cpf);
      this.$router.push("/main");
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
  font-size: 24px;
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

.forgot-password-container {
  display: flex;
  justify-content: space-between; /* Ajusta o espaço entre as divs */
  align-items: center; /* Alinha as divs verticalmente */
  gap: 16px; /* Espaço entre as divs */
  margin-top: 16px;
}

.forgot-password {
  font-size: 10px;
  color: #003366;
  text-align: center; /* Centraliza o texto dentro de cada div */
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
