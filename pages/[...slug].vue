<template>
  <UMain>
    <UContainer>
      <UHeader>
        <template #logo>
          <span>
            {{ config.title }}
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
      <UFooter v-if="config.footer">
        <template #right>
          <div class="flex items-center justify-center gap-4">
            <UButton
              v-if="config.socials.github"
              icon="i-mdi-github"
              :to="`https://github.com/${config.socials.github}`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
            <UButton
              v-if="config.socials.twitter"
              icon="i-mdi-twitter"
              :to="`https://twitter.com/${config.socials.twitter}`"
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
const config = useAppConfig()
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
