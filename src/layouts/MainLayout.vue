<template>
  <q-layout view="lHh Lpr lFf">
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
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Menu Lateral -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <!-- Usando Flexbox para organizar conteúdo -->
      <q-list class="fit column justify-between">
        <!-- Informações do usuário no topo -->
        <div class="q-pa-md">
          <!-- Círculo com a letra "U" -->
          <div class="q-pa-md">
            <div
              class="circle"
              style="
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: #2196f3;
                padding: 4px;
                background: linear-gradient(45deg, yellow, orange);
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                style="
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  background-color: #2196f3;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 28px;
                  font-weight: bold;
                "
              >
                U
              </div>
            </div>
          </div>

          <q-item>
            <q-item-section>
              <div class="text-h4 text-bold">{{ firstName }}</div>
              <!-- Nome com fonte maior -->
              <div class="text-body2 q-mt-md">{{ email }}</div>
              <!-- E-mail -->
              <div class="text-caption q-mt-md">{{ companyName }}</div>
              <!-- Nome da empresa -->
            </q-item-section>
          </q-item>
        </div>

        <!-- Rodapé com Política de Privacidade, Versão e Sair -->
        <div>
          <q-separator />

          <q-item clickable @click="openPrivacyPolicy">
            <q-item-section>Política de Privacidade</q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section>Versão {{ appVersion }}</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable @click="logout">
            <q-item-section>Sair</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    // Informações do usuário (essas seriam dinâmicas em uma aplicação real)
    const firstName = ref("Usuário");
    const email = ref("usuario@exemplo.com");
    const companyName = ref(
      "PRODEPA - Empresa de Tecnologia da Informação e Comunicação do Estado do Pará"
    );
    const appVersion = ref("1.0.0");

    // Funções para ações
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const openPrivacyPolicy = () => {
      console.log("Abrindo política de privacidade");
      // Aqui pode-se abrir uma página ou modal de política de privacidade
    };

    const logout = () => {
      console.log("Deslogando...");
      // Aqui vai a lógica para deslogar o usuário
    };

    return {
      leftDrawerOpen,
      firstName,
      email,
      companyName,
      appVersion,
      toggleLeftDrawer,
      openPrivacyPolicy,
      logout,
    };
  },
});
</script>
