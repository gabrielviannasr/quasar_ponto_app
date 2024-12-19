<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer com abas -->
    <!-- <q-footer class="bg-white text-black" elevated>
      <q-tabs
        align="justify"
        v-model="tab"
        class="bg-primary text-white"
        active-color="white"
        indicator-color="white"
      >
        <q-route-tab to="/" label="Tela 1" icon="home" />
        <q-route-tab to="/tela2" label="Tela 2" icon="list" />
        <q-route-tab to="/tela3" label="Tela 3" icon="person" />
      </q-tabs>
    </q-footer> -->
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "Tela1", // Aba inicial
    };
  },
};
</script>
