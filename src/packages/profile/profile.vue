<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { IProfile, IPutProfile, EGender } from '@/types/profile'

import { getProfileAPI, putProfileAPI } from '@/services/profile'
import useProfileStore from '@/stores/profile'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const profileStore = useProfileStore()

const profile = ref({} as IProfile)

const getProfile = async () => {
  const data = await getProfileAPI()
  profile.value = data.result
}

const uploadAvatar = async (filePath: string) => {
  return await uni.uploadFile({
    url: '/member/profile/avatar',
    name: 'file',
    filePath
  })
}

const onAvatarChange = () => {
  uni.chooseMedia({
    mediaType: ['image'],
    async success(res) {
      try {
        const data = await uploadAvatar(res.tempFiles[0].tempFilePath)
        profile.value.avatar = profileStore.profile.avatar = JSON.parse(data.data).result.avatar
      } catch (err) {
        uni.showToast({
          icon: 'error',
          title: '上传失败！',
          duration: 2000
        })
      }
    }
  })
}

const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value.gender = ev.detail.value as EGender
}

const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  profile.value.birthday = ev.detail.value
}

const locationCode: Pick<IPutProfile, 'provinceCode' | 'cityCode' | 'countyCode'> = {
  provinceCode: null,
  cityCode: null,
  countyCode: null
}

const onLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  profile.value.fullLocation = ev.detail.value.join(' ')

  let i = 0
  for (const k in locationCode) {
    locationCode[k] = ev.detail.code[i++]
  }
}

const onSubmit = async () => {
  const { nickname, gender, birthday, profession } = profile.value
  const data = await putProfileAPI({ nickname, gender, birthday, profession, ...locationCode })

  profileStore.profile.nickname = data.result.nickname

  uni.showToast({
    icon: 'success',
    title: '保存成功'
  })
}

onLoad(() => {
  getProfile()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="onAvatarChange">
        <image class="image" :src="profile.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio
                value="男"
                color="#27ba9b"
                :checked="profile.gender === '男'"
                style="transform: scale(0.8)"
              />
              男
            </label>
            <label class="radio">
              <radio
                value="女"
                color="#27ba9b"
                :checked="profile.gender === '女'"
                style="transform: scale(0.8)"
              />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            @change="onBirthdayChange"
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
          >
            <view v-if="profile.birthday">{{ profile.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            mode="region"
            :value="profile.fullLocation?.split(' ')"
            @change="onLocationChange"
          >
            <view v-if="profile.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
