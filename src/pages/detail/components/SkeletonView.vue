<script lang="ts" setup></script>

<template name="skeleton">
  <view class="sk-container">
    <scroll-view scroll-y class="viewport" enable-back-to-top>
      <view class="goods">
        <view class="preview">
          <swiper circular :current="0" autoplay>
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-494 sk-text">259.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-709 sk-text"
            >新款LOGO印花时尚学步叫叫鞋</view
          >
          <view class="desc sk-transparent sk-text-0-0000-798 sk-text">软底包头叫叫鞋app</view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-258 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-38 sk-text">
              请选择商品规格
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-449 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-437 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-991 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-548 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-508 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-870 sk-text">适用年龄</text>
              <text class="value sk-transparent sk-text-25-0000-130 sk-text">1-3岁</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom: 34px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏
        </button>
        <button
          class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="contact"
        >
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服
        </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view
          class="addcart sk-transparent sk-text-31-9444-526 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow sk-transparent sk-text-31-9444-736 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-494 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.4rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-709 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-0-0000-798 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24rpx;
  position: relative !important;
}
.sk-text-14-2857-258 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-38 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-449 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-437 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-991 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-548 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-0-0000-508 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-25-0000-870 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 52rpx;
  position: relative !important;
}
.sk-text-25-0000-130 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 52rpx;
  position: relative !important;
}
.sk-text-31-9444-526 {
  background-image: linear-gradient(
    transparent 31.9444%,
    #eeeeee 0%,
    #eeeeee 68.0556%,
    transparent 0%
  ) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-31-9444-736 {
  background-image: linear-gradient(
    transparent 31.9444%,
    #eeeeee 0%,
    #eeeeee 68.0556%,
    transparent 0%
  ) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
