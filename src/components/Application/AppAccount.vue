<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { _storage } from '@jsxiaosi/utils';
  import { usePermissionStoreHook } from '@/store/modules/permission';
  import { useUserInfoStoreHook } from '@/store/modules/user';
  const router = useRouter();

  const command = (value: string) => {
    if (value === 'signOut') {
      usePermissionStoreHook().handleRemoveMultiTabs();
      useUserInfoStoreHook().removeUserInfo();
      router.push('/login');
    }
  };
</script>

<template>
  <div class="account cursor">
    <el-dropdown trigger="click" @command="command">
      <img src="@/assets/login/logo.png" class="wave" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="signOut">Cerrar sesion</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
  .account {
    .wave {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
</style>
