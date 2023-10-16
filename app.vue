<template>
  <UMain>
    <UContainer>
      <UHeader>
        <template #logo>
          <Icon v-if="header.icon" :name="header.icon" class="h-20 w-20" />
          <span v-else>
            {{ header.title }}
          </span>
        </template>
        <template #right>
          <UColorModeButton />
        </template>
      </UHeader>

      <NuxtPage />

      <UFooter
        v-if="footer.display"
      >
        <template #right>
          <div class="flex items-center justify-center gap-4">
            <UButton
              v-if="socials.github"
              icon="i-mdi-github"
              :to="`https://github.com/${socials.github}`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
            <UButton
              v-if="socials.twitter"
              icon="i-mdi-twitter"
              :to="`https://twitter.com/${socials.twitter}`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
          </div>
        </template>
      </UFooter>
    </UContainer>
  </UMain>
</template>

<script setup lang="ts">
const { header, footer, socials } = useAppConfig()
</script>
