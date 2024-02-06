<template>
  <div>
    <div class="flex">
      <Sidebar />
      <main class="container mx-auto px-8">
        <div class="flex justify-center items-center h-screen">
          <UButton
            icon="i-logos-github-icon"
            label="Login with Github"
            color="white"
            variant="solid"
            @click="signInWithGithub"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const client = useSupabaseClient();

const signInWithGithub = async () => {
  const { error } = await client.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/confirm",
    },
  });
  if (error) console.log(error);
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};
</script>

<style></style>
