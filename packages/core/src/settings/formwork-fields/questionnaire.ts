export const questionnaire = {
  id: 1,
  formworkName: '调查问卷模板',
  formworkDisplay: 'questionnaireDisplay',
  jsonContent: [
    {
      id: '11e69f20-81ee-4661-918c-148bba39c5f4',
      componentName: 'drawerForm',
      componentProps: {
        'drawer-radio0': '掘金',
        'drawer-radio1': '陈立婷',
        labelWidth: 80,
        labelAlign: 'right',
        labelPlacement: 'left',
        showLabel: true,
      },
      componentPropsMeta: {
        'drawer-radio0': {
          name: 'drawer-radio0',
          fieldComponent: 'input-attribute',
          isDisabled: true,
        },
        'drawer-radio1': {
          name: 'drawer-radio1',
          fieldComponent: 'input-attribute',
          isDisabled: true,
        },
        labelWidth: {
          name: '标签宽度',
          fieldComponent: 'slider-attribute',
        },
        labelAlign: {
          name: '标签对齐',
          fieldComponent: 'select-attribute',
          fieldComponentParam: {
            selectOptions: [
              {
                label: '左边',
                value: 'left',
              },
              {
                label: '右边',
                value: 'right',
              },
            ],
          },
        },
        labelPlacement: {
          name: '标签位置',
          fieldComponent: 'select-attribute',
          fieldComponentParam: {
            selectOptions: [
              {
                label: '左边',
                value: 'left',
              },
              {
                label: '上边',
                value: 'top',
              },
            ],
          },
        },
        showLabel: {
          name: '是否展示标签',
          fieldComponent: 'n-switch',
        },
      },
      dragHandlerName: '表单',
      children: [
        {
          id: '7b8f6a16-c43b-47da-870a-804aa1561ed0',
          componentName: 'drawerFormItem',
          componentProps: {
            labelWidth: 100,
            labelAlign: 'left',
            labelPlacement: 'top',
            showLabel: true,
            label: '1、你是从哪个渠道了解到该lowCode平台',
            propertyName: '',
            independent: true,
            value: '掘金',
          },
          componentPropsMeta: {
            showLabel: {
              name: '是否展示标签',
              fieldComponent: 'n-switch',
            },
            labelWidth: {
              name: '标签宽度',
              fieldComponent: 'slider-attribute',
            },
            labelAlign: {
              name: '标签对齐',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
            labelPlacement: {
              name: '标签位置',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '上边',
                    value: 'top',
                  },
                ],
              },
            },
            label: {
              name: '标签',
              fieldComponent: 'input-attribute',
            },
            propertyName: {
              name: '属性名',
              fieldComponent: 'input-attribute',
            },
            value: {
              name: '属性值',
              fieldComponent: 'input-attribute',
              isDisabled: true,
            },
            independent: {
              name: '是否独立配置',
              fieldComponent: 'n-switch',
            },
          },
          dragHandlerName: '表单项',
          children: [
            {
              id: 'f799b915-4499-4bec-b31e-e585360a9380',
              componentName: 'drawer-radio',
              componentProps: {
                style: 'line-height: 35px;height:30px',
                value: '掘金',
                options: [
                  {
                    label: '掘金',
                    key: 1,
                  },
                  {
                    label: 'GitHub',
                    key: 2,
                  },
                  {
                    label: 'lowCode项目文档',
                    key: 3,
                  },
                  {
                    label: 'lowCode答辩',
                    key: 4,
                  },
                ],
                prefix: 'radio',
              },
              componentPropsMeta: {
                options: {
                  name: '内容设置',
                  fieldComponent: 'handle-array-attribute',
                },
                optionsConfig: {
                  label: {
                    name: '显示内容',
                    fieldComponent: 'n-input',
                  },
                  key: {
                    name: '关键字',
                    fieldComponent: 'n-input',
                  },
                },
              },
              dragHandlerName: '单选',
              type: 'basic-senior',
              style: '',
            },
          ],
          type: 'contain',
        },
        {
          id: '3f812c47-f921-4d96-98dd-8c2aa48eb9c8',
          componentName: 'drawerFormItem',
          componentProps: {
            labelWidth: 80,
            labelAlign: 'left',
            labelPlacement: 'top',
            showLabel: true,
            label: '2、你知道哪位开发文员',
            propertyName: '',
            independent: true,
            value: '123',
          },
          componentPropsMeta: {
            showLabel: {
              name: '是否展示标签',
              fieldComponent: 'n-switch',
            },
            labelWidth: {
              name: '标签宽度',
              fieldComponent: 'slider-attribute',
            },
            labelAlign: {
              name: '标签对齐',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
            labelPlacement: {
              name: '标签位置',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '上边',
                    value: 'top',
                  },
                ],
              },
            },
            label: {
              name: '标签',
              fieldComponent: 'input-attribute',
            },
            propertyName: {
              name: '属性名',
              fieldComponent: 'input-attribute',
            },
            value: {
              name: '属性值',
              fieldComponent: 'input-attribute',
              isDisabled: true,
            },
            independent: {
              name: '是否独立配置',
              fieldComponent: 'n-switch',
            },
          },
          dragHandlerName: '表单项',
          children: [
            {
              id: 'd8cdabbf-3216-49ce-a8c5-17d31c9615f5',
              componentName: 'drawer-radio',
              componentProps: {
                style: 'line-height: 35px;height:30px',
                value: '陈立婷',
                options: [
                  {
                    label: '杨文锋',
                    key: 1,
                  },
                  {
                    label: '陈立婷',
                    key: 2,
                  },
                  {
                    label: '谢祥辉',
                    key: 3,
                  },
                  {
                    label: '叶晓娟',
                    key: 4,
                  },
                ],
                prefix: 'radio',
              },
              componentPropsMeta: {
                options: {
                  name: '内容设置',
                  fieldComponent: 'handle-array-attribute',
                },
                optionsConfig: {
                  label: {
                    name: '显示内容',
                    fieldComponent: 'n-input',
                  },
                  key: {
                    name: '关键字',
                    fieldComponent: 'n-input',
                  },
                },
              },
              dragHandlerName: '单选',
              type: 'basic-senior',
              style: '',
            },
          ],
          type: 'contain',
        },
        {
          id: '65c756d2-5e69-472e-9b29-b06b387b65f0',
          componentName: 'drawerFormItem',
          componentProps: {
            labelWidth: 80,
            labelAlign: 'left',
            labelPlacement: 'top',
            showLabel: true,
            label: '3、你觉得lowCode平台应该新增什么功能',
            propertyName: '',
            independent: true,
            value: '',
          },
          componentPropsMeta: {
            showLabel: {
              name: '是否展示标签',
              fieldComponent: 'n-switch',
            },
            labelWidth: {
              name: '标签宽度',
              fieldComponent: 'slider-attribute',
            },
            labelAlign: {
              name: '标签对齐',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
            labelPlacement: {
              name: '标签位置',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '上边',
                    value: 'top',
                  },
                ],
              },
            },
            label: {
              name: '标签',
              fieldComponent: 'input-attribute',
            },
            propertyName: {
              name: '属性名',
              fieldComponent: 'input-attribute',
            },
            value: {
              name: '属性值',
              fieldComponent: 'input-attribute',
              isDisabled: true,
            },
            independent: {
              name: '是否独立配置',
              fieldComponent: 'n-switch',
            },
          },
          dragHandlerName: '表单项',
          children: [
            {
              id: 'a9ce1ae8-5736-4951-8886-3b1a737dc849',
              componentName: 'DrawerInput',
              componentProps: {
                type: 'text',
                clearable: false,
                readonly: false,
                disabled: false,
                placeholder: '请留下你宝贵的建议',
                loading: false,
                autofocus: false,
                round: false,
                showCount: false,
                value: '',
              },
              componentPropsMeta: {
                placeholder: {
                  name: '提示信息',
                  fieldComponent: 'input-attribute',
                },
                clearable: {
                  name: '是否可清除',
                  fieldComponent: 'n-switch',
                },
                readonly: {
                  name: '是否只读',
                  fieldComponent: 'n-switch',
                },
                disabled: {
                  name: '是否禁用',
                  fieldComponent: 'n-switch',
                },
                autofocus: {
                  name: '是否自动获取焦点',
                  fieldComponent: 'n-switch',
                },
                loading: {
                  name: '是否展示加载图标',
                  fieldComponent: 'n-switch',
                },
                round: {
                  name: '是否圆角',
                  fieldComponent: 'n-switch',
                },
                showCount: {
                  name: '是否显示字数',
                  fieldComponent: 'n-switch',
                },
              },
              dragHandlerName: '单行输入',
              type: 'basic-senior',
              style: '',
            },
          ],
          type: 'contain',
        },
        {
          id: '20e61594-77ff-427b-af88-3323ec43e97c',
          componentName: 'drawerFormItem',
          componentProps: {
            labelWidth: 80,
            labelAlign: 'left',
            labelPlacement: 'top',
            showLabel: true,
            label: '4、你对lowCode平台有什么建议',
            propertyName: '',
            independent: true,
            value: '',
          },
          componentPropsMeta: {
            showLabel: {
              name: '是否展示标签',
              fieldComponent: 'n-switch',
            },
            labelWidth: {
              name: '标签宽度',
              fieldComponent: 'slider-attribute',
            },
            labelAlign: {
              name: '标签对齐',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
            labelPlacement: {
              name: '标签位置',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '上边',
                    value: 'top',
                  },
                ],
              },
            },
            label: {
              name: '标签',
              fieldComponent: 'input-attribute',
            },
            propertyName: {
              name: '属性名',
              fieldComponent: 'input-attribute',
            },
            value: {
              name: '属性值',
              fieldComponent: 'input-attribute',
              isDisabled: true,
            },
            independent: {
              name: '是否独立配置',
              fieldComponent: 'n-switch',
            },
          },
          dragHandlerName: '表单项',
          children: [
            {
              id: '006406c5-96cf-47cd-b7f6-4a0fbde7359d',
              componentName: 'DrawerInput',
              componentProps: {
                type: 'textarea',
                clearable: false,
                readonly: false,
                disabled: false,
                placeholder: '请留下你宝贵的建议',
                loading: false,
                autofocus: false,
                round: false,
                showCount: false,
                value: '',
              },
              componentPropsMeta: {
                placeholder: {
                  name: '提示信息',
                  fieldComponent: 'input-attribute',
                },
                clearable: {
                  name: '是否可清除',
                  fieldComponent: 'n-switch',
                },
                readonly: {
                  name: '是否只读',
                  fieldComponent: 'n-switch',
                },
                disabled: {
                  name: '是否禁用',
                  fieldComponent: 'n-switch',
                },
                autofocus: {
                  name: '是否自动获取焦点',
                  fieldComponent: 'n-switch',
                },
                loading: {
                  name: '是否展示加载图标',
                  fieldComponent: 'n-switch',
                },
                round: {
                  name: '是否圆角',
                  fieldComponent: 'n-switch',
                },
                showCount: {
                  name: '是否显示字数',
                  fieldComponent: 'n-switch',
                },
              },
              dragHandlerName: '多行输入',
              type: 'basic-senior',
              style: '',
            },
          ],
          type: 'contain',
        },
        {
          id: '51fa9a0f-9271-4cf2-bb26-242058c9a043',
          componentName: 'drawerFormItem',
          componentProps: {
            labelWidth: 80,
            labelAlign: 'left',
            labelPlacement: 'top',
            showLabel: true,
            label: '5、请你给lowCode平台打分',
            propertyName: '',
            independent: true,
          },
          componentPropsMeta: {
            showLabel: {
              name: '是否展示标签',
              fieldComponent: 'n-switch',
            },
            labelWidth: {
              name: '标签宽度',
              fieldComponent: 'slider-attribute',
            },
            labelAlign: {
              name: '标签对齐',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
            labelPlacement: {
              name: '标签位置',
              fieldComponent: 'select-attribute',
              fieldComponentParam: {
                selectOptions: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '上边',
                    value: 'top',
                  },
                ],
              },
            },
            label: {
              name: '标签',
              fieldComponent: 'input-attribute',
            },
            propertyName: {
              name: '属性名',
              fieldComponent: 'input-attribute',
            },
            value: {
              name: '属性值',
              fieldComponent: 'input-attribute',
              isDisabled: true,
            },
            independent: {
              name: '是否独立配置',
              fieldComponent: 'n-switch',
            },
          },
          dragHandlerName: '表单项',
          children: [
            {
              id: 'e25e1aaa-df47-4b3b-ad6e-a75fee7632fa',
              componentName: 'n-rate',
              componentProps: {
                allowHalf: false,
                count: 5,
                defaultValue: 0,
                readonly: false,
                size: 'medium',
              },
              componentPropsMeta: {
                allowHalf: {
                  name: '是否允许只激活一半图标',
                  fieldComponent: 'n-switch',
                },
                count: {
                  name: '图标个数',
                  fieldComponent: 'slider-attribute',
                  fieldComponentParam: {
                    maxNum: 10,
                    minNum: 0,
                  },
                },
                defaultValue: {
                  name: '默认激活图标个数',
                  fieldComponent: 'input-attribute',
                },
                readonly: {
                  name: '是否只读',
                  fieldComponent: 'n-switch',
                },
                size: {
                  name: '尺寸',
                  fieldComponent: 'select-attribute',
                  fieldComponentParam: {
                    selectOptions: [
                      {
                        label: '最小的',
                        value: 'small',
                      },
                      {
                        label: '中等的',
                        value: 'medium',
                      },
                      {
                        label: '最大的',
                        value: 'large',
                      },
                    ],
                  },
                },
              },
              dragHandlerName: '评分器',
              type: 'basic',
              style: '',
            },
          ],
          type: 'contain',
        },
      ],
      type: 'contain',
    },
  ],
}
