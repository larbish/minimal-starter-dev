<template>
  <UMain>
    <UContainer>
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
    </UContainer>
  </UMain>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
