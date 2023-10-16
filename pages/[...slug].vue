<template>
  <UMain>
    <UContainer>
      <UHeader>
        <template #logo>
          <UIcon v-if="(header as any).icon" :name="((header as any).icon)" />
          <span v-else>
            {{ (header as any).title }}
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
      <UFooter v-if="(footer as any).display">
        <template #right>
          <div class="flex items-center justify-center gap-4">
            <UButton
              v-if="(socials as any).github"
              icon="i-mdi-github"
              :to="`https://github.com/${(socials as any).github}`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
            <UButton
              v-if="(socials as any).twitter"
              icon="i-mdi-twitter"
              :to="`https://twitter.com/${(socials as any).twitter}`"
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
