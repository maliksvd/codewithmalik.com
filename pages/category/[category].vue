<template>
  <div>
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto px-8">
        <div v-if="data && data.length > 0" class="grid grid-cols-4 mt-8">
          <div v-for="item in data" :key="item.id" :item="item">
            <UCard>
              <div class="flex items-center justify-between space-x-4">
                <h1 class="text-sm font-bold">{{ item.title }}</h1>
                <UBadge color="primary" variant="subtle">{{
                  item.category
                }}</UBadge>
              </div>
            </UCard>
          </div>
        </div>
        <div v-else>
          <div
            class="flex flex-col items-center justify-center h-screen w-full"
          >
            <UIcon name="i-solar-folder-open-bold" class="h-8 w-8 mb-4" />
            <p class="text-base text-black mb-8">No content found</p>
            <UButton color="white" variant="solid" label="Back to home" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const route = useRoute();
const category = route.params.category;

const { data, error } = await useAsyncData("cwm", async () => {
  const { data } = await client
    .from("cwm")
    .select("*")
    .eq("category", category);
  return data;
});
</script>

<style></style>
