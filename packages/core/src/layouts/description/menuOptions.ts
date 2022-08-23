import { RouterLink } from 'vue-router'
import { h } from 'vue'
export const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => '介绍' },
      ),
    key: 'introduce',
    disabled: false,
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'install',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => '安装' },
      ),
    key: '/install',
    disabled: false,
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'use',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => '使用' },
      ),
    key: 'use',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'detail',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => 'JSON配置' },
      ),
    key: 'detail',
  },
]
