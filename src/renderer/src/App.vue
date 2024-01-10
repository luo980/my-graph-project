<template>
  <div>
    <h1>基于FFI的代码组织和构建</h1>
    <div class="indexButton-container">
      <button @click="goToFeature('definition')">获取函数声明</button>
      <button @click="goToFeature('pipeline')">函数流程构造</button>
      <button @click="goToFeature('generation')">代码生成结果</button>
    </div>
    <hr class="indexHr" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    goToFeature(feature) {
      // 根据 feature 实现页面跳转
      this.$router.push(`/${feature}`)
      console.log(`跳转到 ${feature}`)
    }
  }
}
</script>

<style>
hr {
  border: none; /* 移除默认边框 */
  height: 2px; /* 增加高度 */
  background-color: blue; /* 使用明显的颜色 */
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin: 10px;
}

.indexButton-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
}

.indexHr {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 0px;
}

.new {
  background-color: red;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
