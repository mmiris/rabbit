<script setup lang="ts">
import useProfileStore from '@/stores/profile'

const profileStore = useProfileStore()
</script>

<template>
  <view class="my">
    <view>会员信息：{{ profileStore.profile }}</view>
    <button
      @tap="
        profileStore.setProfile({
          nickname: 'naive'
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="profileStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
  </view>
</template>

<style lang="scss">
//
</style>
@/stores/user @/stores/profile
