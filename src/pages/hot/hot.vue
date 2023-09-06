<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { ISubType } from '@/types/hot'

import { getHotsAPI } from '@/services/hot'

const query = defineProps<{
  type: string
}>()

const activeIdx = ref(0)

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' }
]

const banner = ref('')
const subTypes = ref<(ISubType & { isOver?: boolean })[]>([])

const currType = hotMap.find((v) => v.type === query.type)

const getHots = async () => {
  const data = await getHotsAPI(currType!.url)
  banner.value = data.result.bannerPicture
  subTypes.value = data.result.subTypes
  console.log(subTypes.value)
}

const hitBottomHandler = async () => {
  const currSubType = subTypes.value[activeIdx.value]
  let page = ++currSubType.goodsItems.page

  currSubType.isOver = currSubType.goodsItems.page < page ? true : false
  if (currSubType.isOver) return

  const data = await getHotsAPI(currType!.url, {
    page,
    pageSize: 10,
    subType: currSubType.id
  })

  currSubType.goodsItems.items.push(...data.result.subTypes[activeIdx.value].goodsItems.items)
}

onLoad(() => {
  getHots()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="banner"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        :class="{ active: index === activeIdx }"
        v-for="(item, index) in subTypes"
        :key="item.id"
        @tap="activeIdx = index"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(subType, index) in subTypes"
      :key="subType.id"
      v-show="activeIdx == index"
      @scrolltolower="hitBottomHandler"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="item in subType.goodsItems.items"
          :key="item.id"
          :url="`/pages/detail/detail?id=${item.id}`"
        >
          <image class="thumb" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{
        subType?.isOver ? '人家也是有底线的哇！🐣' : '正在加载...'
      }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
