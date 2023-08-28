<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import NavBar from './components/NavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

import { TGuessInstance } from '@/types/component'
import { IBanner, ICategory, IHot } from '@/types/home'

import { getBannersAPI, getCategoriesAPI, getHotsAPI } from '@/services/home'

const banners = ref<IBanner[]>([])
const categories = ref<ICategory[]>([])
const hots = ref<IHot[]>([])
const guessRef = ref<TGuessInstance>()
const isRefreshing = ref(false)

const getBanners = async () => {
  const data = await getBannersAPI()
  banners.value = data.result
}

const getCategories = async () => {
  const data = await getCategoriesAPI()
  categories.value = data.result
}

const getHots = async () => {
  const data = await getHotsAPI()
  hots.value = data.result
}

const refreshHandler = async () => {
  isRefreshing.value = true
  await Promise.all([getBanners(), getCategories(), getHots()])
  isRefreshing.value = false
}

onLoad(() => {
  getBanners()
  getCategories()
  getHots()
})
</script>

<template>
  <nav-bar />
  <scroll-view
    scroll-y
    enable-back-to-top
    refresher-enabled
    :refresher-triggered="isRefreshing"
    @refresherrefresh="refreshHandler"
  >
    <gen-swiper :banners="banners" />
    <category-panel :categories="categories" />
    <hot-panel :hots="hots" />
    <gen-guess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
}
</style>
