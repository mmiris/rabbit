<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import NavBar from './components/NavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

import { IBanner, ICategory, IHot } from '@/types/home'

import { getBannersAPI, getCategoriesAPI, getHotsAPI } from '@/services/home'

const banners = ref<IBanner[]>([])
const categories = ref<ICategory[]>([])
const hots = ref<IHot[]>([])

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

onLoad(() => {
  getBanners()
  getCategories()
  getHots()
})
</script>

<template>
  <view class="index">
    <nav-bar />
    <gen-swiper :banners="banners" />
    <category-panel :categories="categories" />
    <hot-panel :hots="hots" />
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
