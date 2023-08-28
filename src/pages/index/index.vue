<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import NavBar from './components/NavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import SkeletonView from './components/SkeletonView.vue'

import { TGuessInstance } from '@/types/component'
import { IBanner, ICategory, IHot } from '@/types/home'

import { getBannersAPI, getCategoriesAPI, getHotsAPI } from '@/services/home'

const banners = ref<IBanner[]>([])
const categories = ref<ICategory[]>([])
const hots = ref<IHot[]>([])
const guessRef = ref<TGuessInstance>()
const isRefreshing = ref(false)
const isLoading = ref(true)

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
  guessRef.value.resetGuesses()
  await Promise.all([getBanners(), getCategories(), getHots()])
  isRefreshing.value = false
}

const hitBottomHandler = () => {
  guessRef.value.getGuesses()
}

onLoad(async () => {
  await Promise.all([getBanners(), getCategories(), getHots()])
  isLoading.value = false
})
</script>

<template>
  <nav-bar />
  <skeleton-view v-if="isLoading" />
  <scroll-view
    v-else
    scroll-y
    enable-back-to-top
    refresher-enabled
    :refresher-triggered="isRefreshing"
    @scrolltolower="hitBottomHandler"
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
