<template>
  <div>
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto px-8">
        <pre>
          {{ user.email }}
        </pre>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();
</script>

<style></style>
