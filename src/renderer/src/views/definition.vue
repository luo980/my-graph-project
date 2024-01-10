<template>
  <div>
    <h1>获取函数声明</h1>
  </div>
  <div>
    <input type="file" multiple accept=".yaml, .yml" @change="handleFilesChange" />
    <div class="funcTable-container">
      <table>
        <thead>
          <tr>
            <th>函数名称</th>
            <th>输入参数</th>
            <th>返回参数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="func in functionsList" :key="func.name">
            <td>{{ func.name }}</td>
            <td>
              <template v-if="func.inputparam && func.inputparam.length">
                <ul>
                  <li v-for="param in func.inputparam" :key="param.index">
                    {{ param.paramname }} ({{ param.paramtype }})
                  </li>
                </ul>
              </template>
              <template v-else>-</template>
            </td>
            <td>
              <template v-if="func.returnparam && func.returnparam.length">
                <ul>
                  <li v-for="param in func.returnparam" :key="param.index">
                    {{ param.paramname }} ({{ param.paramtype }})
                  </li>
                </ul>
              </template>
              <template v-else>-</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { parseYamlFunctions } from '../utils/yamlParsers'

export default {
  data() {
    return {
      functionsList: [] as Array<{ name: string; inputparam: any[]; returnparam: any[] }> // 用于存储解析后的函数列表
    }
  },
  methods: {
    handleFilesChange(event) {
      const files = event.target.files // 这是一个 FileList 对象
      if (!files.length) {
        return
      }

      // 遍历所有选中的文件
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        this.readFile(file)
      }
    },
    readFile(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const fileContent = e.target?.result
        const parsedData = parseYamlFunctions(fileContent)
        if (parsedData) {
          this.functionsList = parsedData
        } else {
          console.error('YAML 解析失败')
          // 处理解析失败的情况
        }
      }

      reader.onerror = (e) => {
        console.error('文件读取出错: ', e)
      }

      // 读取文件
      reader.readAsText(file) // 以文本形式读取文件
      // 或者根据文件类型使用其他读取方法，例如 reader.readAsDataURL(file) 用于图片文件
    }
  }
}
</script>

<style>
button {
  margin: 10px;
}

.funcTable-container {
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
}

.funcTable-container table {
  border-collapse: collapse;
  width: 100%;
}

.funcTable-container th,
.funcTable-container td {
  border: 1px solid #ddd;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
}

.funcTable-container th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
