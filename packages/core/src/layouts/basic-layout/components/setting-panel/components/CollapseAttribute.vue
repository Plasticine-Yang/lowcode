<template>
  <div>
    <n-collapse>
      <template v-if="componentProps![keyname] instanceof Array">
        <n-collapse-item
          v-for="(item, index) in componentProps![keyname]"
          :key="index"
          :title="`第${index + 1}行`"
        >
          <n-form>
            <n-form-item
              v-for="(sub, key, indexs) in item"
              :key="indexs"
              :label="componentPropsMeta![`${keyname}Config`][key].name"
            >
              <global-setting-item
                :keys="key"
                :global-props="componentProps![keyname][index]"
                :global-meta=" componentPropsMeta![`${keyname}Config`] "
              ></global-setting-item>
            </n-form-item>
          </n-form>
        </n-collapse-item>
      </template>
      <!-- <template v-else
        ><n-collapse-item
          v-for="(item,key,index) in componentProps![keyname]"
          :key="index"
          :title="`第${index + 1}行`"
        >
          <n-form>
            <n-form-item
              v-for="(sub, key, indexs) in item"
              :key="indexs"
              :label="componentPropsMeta![`${keyname}Config`][key].name"
            >
              <global-setting-item
                :keys="key"
                :global-props="componentProps![keyname][index]"
                :global-meta=" componentPropsMeta![`${keyname}Config`] "
              ></global-setting-item>
            </n-form-item> </n-form
        ></n-collapse-item>
      </template> -->
    </n-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDrawer } from '@/store'

export default defineComponent({
  props: {
    keyname: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    console.log(props.keyname)

    const drawer = useDrawer()
    let componentProps = computed(() => drawer.activeComponent?.componentProps)
    let componentPropsMeta = computed(
      () => drawer.activeComponent?.componentPropsMeta,
    )
    return { componentProps, componentPropsMeta }
  },
})
</script>

<style scoped></style>
