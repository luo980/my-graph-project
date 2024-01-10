import yaml from 'js-yaml'

export function parseYamlFunctions(yamlString) {
  try {
    return yaml.load(yamlString)
  } catch (e) {
    console.error('解析 YAML 出错:', e)
    return null
  }
}
