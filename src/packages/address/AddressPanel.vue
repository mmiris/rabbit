<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'

import useProfileStore from '@/stores/profile'
import { getAddressesAPI, deleteAddressAPI } from '@/services/address'
import { IAddress } from '@/types/address'

const { safeAreaInsets } = uni.getSystemInfoSync()

const profileStore = useProfileStore()

onShow(() => {
  if (profileStore.profile) {
    getAddresses()
  }
})

const addresses = ref<IAddress[]>()

const getAddresses = async () => {
  const data = await getAddressesAPI()
  addresses.value = data.result
}

const onDeleteAddress = async (id: string) => {
  const res = await uni.showModal({ title: '确认删除地址？', content: '地址删除后无法找回。' })
  if (res.confirm) {
    await deleteAddressAPI(id)
    uni.showToast({ icon: 'success', title: '删除成功' })
    getAddresses()
  }
}
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addresses?.length" class="address">
        <view class="address-list">
          <!-- 收货地址项 -->
          <uni-swipe-action>
            <uni-swipe-action-item class="item" v-for="item in addresses" :key="item.id">
              <view class="item-content">
                <view class="user">
                  {{ item.receiver }}
                  <text class="contact">{{ item.contact }}</text>
                  <text v-if="item.isDefault" class="badge">默认</text>
                </view>
                <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
                <navigator
                  class="edit"
                  hover-class="none"
                  :url="`/packages/address/AddressForm?id=${item.id}`"
                >
                  修改
                </navigator>
              </view>
              <template #right>
                <view class="delete-button" @tap="onDeleteAddress(item.id)">
                  <text>删除</text>
                </view>
              </template>
            </uni-swipe-action-item>
          </uni-swipe-action>
        </view>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn" :style="{ marginBottom: safeAreaInsets?.bottom + 'px' }">
      <navigator hover-class="none" url="/packages/address/AddressForm">新建地址</navigator>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #cf4444;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;

    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  padding-top: 300rpx;
  text-align: center;
  color: #888;
  font-size: 32rpx;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
