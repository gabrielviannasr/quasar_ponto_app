<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>SIREPA</q-toolbar-title>
        <!-- <div
          class="q-mx-md"
          style="
            font-family: 'Roboto Flex', sans-serif;
            font-size: 14px;
            color: #003366;
          "
        >
          v{{ appVersion }}
        </div> -->
      </q-toolbar>
    </q-header>

    <!-- Menu Lateral -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list
        class="q-pa-none"
        style="display: flex; flex-direction: column; height: 100%"
      >
        <!-- Informações do usuário no topo -->
        <div class="q-pa-md text-center" style="padding-top: 40px">
          <!-- Círculo com a imagem do usuário -->
          <div
            class="circle"
            style="
              width: 180px;
              height: 180px;
              border-radius: 50%;
              background-color: #003366;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
            "
          >
            <q-img
              src="~assets/User.png"
              alt="User Image"
              style="
                width: 140px;
                height: 140px;
                object-fit: cover;
                display: block;
                margin: 0 auto;
              "
            />
          </div>

          <!-- Texto Olá Alan Amaral -->
          <div
            class="q-mt-md"
            style="
              font-family: 'Roboto Slab', serif;
              font-weight: bold;
              font-size: 24px;
              color: #003366;
            "
          >
            Olá Alan Amaral!
          </div>

          <!-- Data -->
          <div
            class="q-mt-md"
            style="
              font-family: 'Roboto Slab', serif;
              font-size: 14px;
              color: #003366;
            "
          >
            Quinta-feira, 31 de outubro de 2024
          </div>
        </div>

        <!-- Espaço entre a data e os itens do menu -->
        <div class="q-mt-lg"></div>
        <!-- Espaçamento aqui -->

        <!-- Itens do Menu -->
        <div
          class="q-pa-none"
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
          "
        >
          <q-item clickable class="items-center" to="/">
            <q-item-section avatar>
              <q-img src="~assets/icons/Face ID.png" />
            </q-item-section>
            <q-item-section> Registrar ponto </q-item-section>
          </q-item>

          <q-item clickable class="items-center" to="/history">
            <q-item-section avatar>
              <q-img src="~assets/icons/Historical.png" />
            </q-item-section>
            <q-item-section> Meu histórico </q-item-section>
          </q-item>

          <q-item clickable class="items-center" to="/justify">
            <q-item-section avatar>
              <q-img src="~assets/icons/Submit Document.png" />
            </q-item-section>
            <q-item-section> Registrar falta </q-item-section>
          </q-item>

          <q-item clickable class="items-center" to="/settings">
            <q-item-section avatar>
              <q-img src="~assets/icons/Settings.png" />
            </q-item-section>
            <q-item-section> Configurações </q-item-section>
          </q-item>

          <q-item clickable class="items-center" to="/about">
            <q-item-section avatar>
              <q-img src="~assets/icons/About.png" />
            </q-item-section>
            <q-item-section> Sobre o sistema </q-item-section>
          </q-item>

          <q-item clickable @click="logout" class="items-center">
            <q-item-section avatar>
              <q-img src="~assets/icons/Emergency Exit.png" />
            </q-item-section>
            <q-item-section> Sair do app </q-item-section>
          </q-item>
        </div>

        <!-- Footer dentro do Drawer (alinhado ao final) -->
        <div style="margin-top: auto; text-align: center; padding: 20px 0">
          <div
            style="
              font-family: 'Roboto Flex', sans-serif;
              font-size: 12px;
              color: #003366;
            "
          >
            © 2024 Prodepa. Todos os direitos reservados.
          </div>
        </div>
      </q-list>
    </q-drawer>

    <!-- Página de Conteúdo -->
    <q-page-container class="bg-white text-primary">
      <!-- Conteúdo principal -->
      <router-view :isMenuOpen="leftDrawerOpen" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();

    const leftDrawerOpen = ref(false);

    // Informações da versão do app
    const appVersion = ref("1.0.0");

    // Função para deslogar
    const logout = () => {
      console.log("Deslogando...");
      // Exemplo de lógica de logout
      localStorage.clear(); // Remova os dados de autenticação
      sessionStorage.clear(); // Limpe a sessão, se necessário
      // Redireciona para a página de login
      leftDrawerOpen.value = false; // Fecha o menu

      router.push("/login");
      // window.location.href = "/#/login"; // Alternativa usando o Vue Router: this.$router.push('/login');
      // window.location.href = `${window.location.origin}/login`;
    };

    // Função para alternar o menu lateral
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      appVersion,
      logout,
      toggleLeftDrawer,
    };
  },
});
</script>

<style scoped>
/* Círculo com a imagem do usuário */
.circle {
  width: 216px;
  height: 216px;
  border-radius: 50%;
  background-color: #003366;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

/* Menu de itens */
.q-item {
  font-family: "Roboto Flex", sans-serif;
  font-size: 20px;
  color: #003366;
}

.q-item-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Alinha ícones e texto no centro */
}

/* Ajuste para footer dentro do drawer */
.q-drawer .q-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.q-drawer .q-list div:last-child {
  margin-top: auto; /* Faz o footer ficar na parte inferior do drawer */
}

/* Ajuste da estrutura do menu */
.q-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaço entre a data e os itens do menu */
  height: 100%;
}
</style>
