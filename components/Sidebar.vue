<template>
  <div>
    <aside class="w-56 border-r h-screen px-4">
      <nav class="flex flex-col items-start justify-between h-screen">
        <div class="flex flex-col items-start space-y-4 py-8">
          <div v-for="item in items" :key="item.path">
            <NuxtLink :to="item.path" class="flex items-center space-x-2">
              <div
                class="w-8 h-8 rounded-md flex item-center justify-center border-1.5"
                :class="[item.color, item.contrastColor, 'border']"
              >
                <UIcon
                  :name="item.icon"
                  :class="item.contrastColor"
                  class="h-5 w-5 h-full"
                />
              </div>
              <span class="text-sm">{{ item.title }}</span>
            </NuxtLink>
          </div>
        </div>
        <div class="py-4 w-full">
          <div v-if="user && user.user_metadata.full_name">
            <NuxtLink to="/profile" class="flex items-center space-x-2">
              <img
                :src="user.user_metadata.avatar_url"
                :alt="user.user_metadata.full_name"
                class="w-8 h-8 rounded-full"
              />
              <span class="text-sm">{{ user.user_metadata.full_name }}</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </aside>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const items = [
  {
    title: "VS Code",
    path: "/category/vscode",
    color: "bg-white",
    contrastColor: "text-blue-700",
    icon: "i-solar-code-square-bold",
  },
  {
    title: "Videos",
    path: "/category/videos",
    color: "bg-white",
    contrastColor: "text-yellow-700",
    icon: "i-solar-clapperboard-play-bold",
  },
  {
    title: "Design",
    path: "/category/design",
    color: "bg-white",
    contrastColor: "text-orange-700",
    icon: "i-solar-sidebar-code-bold",
  },
  {
    title: "Development",
    path: "/category/development",
    color: "bg-white",
    contrastColor: "text-cyan-700",
    icon: "i-solar-programming-bold",
  },
  {
    title: "Artificial Intelligence",
    path: "/category/ai",
    color: "bg-white",
    contrastColor: "text-red-700",
    icon: "i-solar-bacteria-bold",
  },
  {
    title: "Nuxt",
    path: "/category/nuxt",
    color: "bg-white",
    contrastColor: "text-green-700",
    icon: "i-logos-nuxt-icon",
  },
  {
    title: "SwiftUI",
    path: "/category/swiftui",
    color: "bg-white",
    contrastColor: "text-purple-700",
    icon: "i-logos-swift",
  },
];
</script>

<style></style>
