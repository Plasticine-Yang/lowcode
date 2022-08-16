export const questionnaire = {
  id: 1,
  formworkName: '调查问卷模板',
  formworkDisplay: 'questionnaireDisplay',
  jsonContent: [
    {
      id: '93131e37-205d-4862-a25f-b3fa2d842ad3',
      componentName: 'drawerText',
      componentProps: {
        style: {
          width: '100%',
          lineHeight: '30px',
          height: '30px',
        },
        inputText: 'lowCode的调查问卷模板',
      },
      componentPropsMeta: {
        width: {
          name: '长度',
          fieldComponent: 'input-attribute',
        },
        height: {
          name: '高度',
          fieldComponent: 'input-attribute',
        },
        lineHeight: {
          name: '行高',
          fieldComponent: 'input-attribute',
        },
        inputText: {
          name: '文本内容',
          fieldComponent: 'input-attribute',
        },
      },
      dragHandlerName: '文本框',
      type: 'basic-senior',
    },
    {
      id: 'bfa8ba63-79e3-44f9-ae32-bb2d54bd4bd9',
      componentName: 'drawerText',
      componentProps: {
        style: {
          width: '100%',
          lineHeight: '30px',
          height: '30px',
        },
        inputText: '1、你是从哪个渠道了解到该lowCode平台',
      },
      componentPropsMeta: {
        width: {
          name: '长度',
          fieldComponent: 'input-attribute',
        },
        height: {
          name: '高度',
          fieldComponent: 'input-attribute',
        },
        lineHeight: {
          name: '行高',
          fieldComponent: 'input-attribute',
        },
        inputText: {
          name: '文本内容',
          fieldComponent: 'input-attribute',
        },
      },
      dragHandlerName: '文本框',
      type: 'basic-senior',
    },
    {
      id: 'fd80e4a6-89d9-4aab-a8ca-d62712106785',
      componentName: 'drawerFlex',
      componentProps: {
        cols: 2,
        flexText: '1,20',
        interval: 0,
      },
      componentPropsMeta: {
        cols: {
          name: '容器数量',
          fieldComponent: 'slider-attribute',
          fieldComponentParam: {
            maxNum: 12,
          },
        },
        flexText: {
          name: '容器比例',
          fieldComponent: 'input-attribute',
        },
        interval: {
          name: '容器间隔',
          fieldComponent: 'slider-attribute',
        },
      },
      dragHandlerName: 'flex布局',
      children: [
        [
          {
            id: 'c5c95528-d03d-4b4d-81af-80f7b8184a80',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
          {
            id: '5187b628-1e20-4ed5-84ff-e6091a6b15bc',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
          {
            id: '3cf86f0b-a2d9-4281-918c-48df6a8b5341',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
          {
            id: 'e2bae64a-f0fc-45b6-b641-eb52b4502e3c',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
        ],
        [
          {
            id: 'ed5258f2-05b9-4cef-bd83-45c80440661f',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: '掘金',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
          {
            id: '99fe8512-28d4-4958-a7c1-a52049254779',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: 'GitHub',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
          {
            id: 'fb48188c-f7dc-4e02-a576-45c7d783fe23',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: 'lowCode项目文档',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
          {
            id: '8d028661-3615-4263-88e5-842890ce788a',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: 'lowCode答辩',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
        ],
      ],
      type: 'contain',
    },
    {
      id: 'bb102e3e-2dc9-4226-9eaa-d3f3f5de54b2',
      componentName: 'drawerText',
      componentProps: {
        style: {
          width: '100%',
          lineHeight: '30px',
          height: '30px',
        },
        inputText: '2、你知道哪位开发人员',
      },
      componentPropsMeta: {
        width: {
          name: '长度',
          fieldComponent: 'input-attribute',
        },
        height: {
          name: '高度',
          fieldComponent: 'input-attribute',
        },
        lineHeight: {
          name: '行高',
          fieldComponent: 'input-attribute',
        },
        inputText: {
          name: '文本内容',
          fieldComponent: 'input-attribute',
        },
      },
      dragHandlerName: '文本框',
      type: 'basic-senior',
    },
    {
      id: '6ee05771-70f6-4f1d-8de5-1171d85084e6',
      componentName: 'drawerFlex',
      componentProps: {
        cols: 8,
        flexText: '1,10,1,10,1,10,1,10',
        interval: 0,
      },
      componentPropsMeta: {
        cols: {
          name: '容器数量',
          fieldComponent: 'slider-attribute',
          fieldComponentParam: {
            maxNum: 12,
          },
        },
        flexText: {
          name: '容器比例',
          fieldComponent: 'input-attribute',
        },
        interval: {
          name: '容器间隔',
          fieldComponent: 'slider-attribute',
        },
      },
      dragHandlerName: 'flex布局',
      children: [
        [
          {
            id: '4f677b00-481b-4a8c-90d5-524178dd39c8',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
        ],
        [
          {
            id: '8d22a30d-c08d-4583-91d2-4287ee8a31a9',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: '杨文锋',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
        ],
        [
          {
            id: 'ad67a4fa-9526-478d-a3f6-ef42ab7ccf92',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
        ],
        [
          {
            id: 'ac754df7-35a5-4ef1-a284-6c1d16218b5c',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: '123',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
        ],
        [
          {
            id: '3dd69046-d95e-49c8-a327-2c2dd84c17b5',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
        ],
        [
          {
            id: '8544288d-ddc6-4982-9ae9-4381eabd497a',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: '123',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
        ],
        [
          {
            id: '18c92aed-d24d-44ad-9305-8d782b81905e',
            componentName: 'n-radio',
            componentProps: {
              style: 'line-height: 30px;height:30px',
            },
            dragHandlerName: '单选',
            type: 'basic',
            style: '',
          },
        ],
        [
          {
            id: 'd2a9805f-560c-4634-88af-f2f48d3adb22',
            componentName: 'drawerText',
            componentProps: {
              style: {
                width: '100%',
                lineHeight: '30px',
                height: '30px',
              },
              inputText: '123',
            },
            componentPropsMeta: {
              width: {
                name: '长度',
                fieldComponent: 'input-attribute',
              },
              height: {
                name: '高度',
                fieldComponent: 'input-attribute',
              },
              lineHeight: {
                name: '行高',
                fieldComponent: 'input-attribute',
              },
              inputText: {
                name: '文本内容',
                fieldComponent: 'input-attribute',
              },
            },
            dragHandlerName: '文本框',
            type: 'basic-senior',
          },
        ],
      ],
      type: 'contain',
    },
    {
      id: 'd3b35d41-345d-4ebf-9148-cc86f7db0bf7',
      componentName: 'drawerText',
      componentProps: {
        style: {
          width: '100%',
          lineHeight: '30px',
          height: '30px',
        },
        inputText: '3、你觉得lowCode平台应该新增什么功能',
      },
      componentPropsMeta: {
        width: {
          name: '长度',
          fieldComponent: 'input-attribute',
        },
        height: {
          name: '高度',
          fieldComponent: 'input-attribute',
        },
        lineHeight: {
          name: '行高',
          fieldComponent: 'input-attribute',
        },
        inputText: {
          name: '文本内容',
          fieldComponent: 'input-attribute',
        },
      },
      dragHandlerName: '文本框',
      type: 'basic-senior',
    },
    {
      id: '86f79cf6-fd61-4cca-9354-1c505f6fbd63',
      componentName: 'n-input',
      componentProps: {
        type: 'text',
        clearable: false,
        readonly: false,
        disabled: false,
        placeholder: '请留下你的宝贵建议',
        loading: false,
        autofocus: false,
        round: false,
        showCount: false,
        vModel: '123',
      },
      componentPropsMeta: {
        placeholder: {
          name: '提示信息',
          fieldComponent: 'n-input',
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
      type: 'basic',
      style: '',
    },
    {
      id: '08e496bb-c508-4314-81fa-a3e189ad3005',
      componentName: 'drawerText',
      componentProps: {
        style: {
          width: '100%',
          lineHeight: '30px',
          height: '30px',
        },
        inputText: '4、你对lowCode平台有什么新的建议',
      },
      componentPropsMeta: {
        width: {
          name: '长度',
          fieldComponent: 'input-attribute',
        },
        height: {
          name: '高度',
          fieldComponent: 'input-attribute',
        },
        lineHeight: {
          name: '行高',
          fieldComponent: 'input-attribute',
        },
        inputText: {
          name: '文本内容',
          fieldComponent: 'input-attribute',
        },
      },
      dragHandlerName: '文本框',
      type: 'basic-senior',
    },
    {
      id: 'dc0692f6-7ab6-4f19-9559-9b7bcc5ce2af',
      componentName: 'n-input',
      componentProps: {
        type: 'textarea',
        clearable: false,
        readonly: false,
        disabled: false,
        placeholder: '',
        loading: false,
        autofocus: false,
        round: false,
        showCount: false,
        vModel: '123',
      },
      componentPropsMeta: {
        placeholder: {
          name: '提示信息',
          fieldComponent: 'n-input',
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
      type: 'basic',
      style: '',
    },
  ],
}
