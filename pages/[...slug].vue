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
      </UHeader>
      <UPage>
        <UPageHeader :title="page.title" :description="page.description" />
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
          </UAside>
        </template>
        <UPageBody prose>
          <ContentRenderer v-if="page.body" :value="page" />
        </UPageBody>
      </UPage>
      <UFooter v-if="footer.display">
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
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
