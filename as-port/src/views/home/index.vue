<template>
  <main>
    <section class="KV">
      <KV></KV>
    </section>
    <section class="profile max_w">
      <Profile></Profile>
    </section>
  </main>
</template>
<style lang="scss" scoped>
</style>
<script>
import KV from '../../components/Kv';
import Profile from '../../components/Profile'
export default {
  
  name: 'Home',
  components: {
    KV,
    Profile
  },


};
</script>
