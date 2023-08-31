<script setup lang="ts">
import { ref, reactive } from 'vue'

import { IPagination } from '@/types/global'
import { IGuess } from '@/types/home'

import { getGuessesAPI } from '@/services/home'
import { onMounted } from 'vue'

const guesses = ref<IGuess[]>([])
const pageParams: IPagination = reactive({
  page: 1,
  pageSize: 10
})
const isOver = ref(false)

const getGuesses = async () => {
  if (isOver.value) return

  const data = await getGuessesAPI(pageParams)
  guesses.value.push(...data.result.items)

  pageParams.page++
  isOver.value = pageParams.page > data.result.pages ? true : false
}

const resetGuesses = () => {
  pageParams.page = 1
  guesses.value = []
  isOver.value = false
}

onMounted(() => getGuesses())

defineExpose({ getGuesses, resetGuesses })
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guesses"
      :key="item.id"
      :url="`/pages/detail/detail?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text" v-if="isOver">页面已经完啦！你挑的嘛，偶像！！！ </view>
  <view class="loading-text" v-else> 正在加载... </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
