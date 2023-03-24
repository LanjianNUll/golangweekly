<script setup>
import DefaultTheme from "vitepress/theme"
import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 2em">
      <Giscus
        repo="LanjianNUll/golangweekly"
        repoId="R_kgDOJNvO0w"
        category="General"
        categoryId="DIC_kwDOJNvO084CVHpo" 
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
      </div>

    </template>
  </Layout>
</template>

<style>
img.pv {
  margin-top: 1em;
}
</style>
