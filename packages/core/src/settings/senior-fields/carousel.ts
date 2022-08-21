export const carousel: IField = {
  id: 9,
  fieldName: '轮播图',
  componentName: 'drawer-carousel',
  type: 'senior',
  componentDisplay: 'carousel-display',
  componentProps: {
    imgUrl: [
      'data:image/png;base64,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',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAABVCAYAAAD+HP6mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAe9SURBVHhe7Zz/SxtnHMf9V/zN3/zJbnTUjDEpo6a/iKybYAkjtHMDJWOzDJHRIWRUKnRhK+oPxR8KDqE0MIjQNRRaEamkwxImzaANw8yMVTQ4Egh8dp/kudwlPnc588Xc5Xm/4A32yeUuxVee+3yee9qeeDxOCNLtgeiIEukhABQAogMlgOhACSA6UAKIDpQAogMlgOhACSA6UAKIDpQAogMlgOhACSA6UAKIDpQAogMlgOhACSA6UAKIDpQAogMlgOhACSA6UAKIDpQAogMlgOhACSA6UAKIDpQAogMlcIXoL/59bZnf/nhBq0/j0tTD7r2ya+kB3YcrRP9hJ0ofxL6X5r3vpmjgo3FpWGQr+DXZezh8Ttm1OPxZQPfhCtEz/x1IpdPzzsefSYUdvPYF7f39jzhLNRc+uSZ9D59Ldg09oDtxTY0e++uFVDyOb/lbqbScb376WZzBgMdkx3L4XLJrcPgzgO7ENaLzrB7aWpEKyDn/1ZdScc9fCVbN6vyz7DjOu8Fr0nNzPn3yozgD6EZcIzrDjaBMQs77v8xaljBXb4fFGaj0s+wYjuy8etCEWlAs0OGx+NnDuEp0xm5Wr9eY/v76T+lrHLsGlK/ZFAcp2tjcKmV7ryAG7cnulo/f2ExS1tlbzp7jBM2NXqTeAT8NryTFoDdxneiNNqYffj5Ziuy1eg0oX7MpCk9pdoCF0DLzmA7FsCXFJEUui+MDa5QWw65jJ0J9+t9rMkpZMexFXCc6c+/VE6mQHLtZ3SoXbn8tPReHr9U8Bdq45S8LMTBDsSMxbEVykQaFQIFoRgy6kGKGYuEJGh6fpqVkTgx6E1eKzjMsN4cyMTlWs7osZ7acmDBmv+vrb8WgnJfLI+JLMU0Pm7yZAGe4UnTGbrnRrjGtDR8rOwenpQ2ouRy5EbMuX4pa3etzcFyzFHJ0eCDS7h7AfC2XNq6uFZ1ptDHV09YGVIKjmdo0808+qikHtNfK779IcwkxVoX2JRGvW5Y8+1sUCY0YtXUpfjoXWqSNfXGMY4zr9d6RfKD0Y5o7ca2L1B8I02rKXaWOq0VvtDHl1CtZ2rKcuGvU3lbly/YdvZYPU7x2pm1S9LxW+4/odwst/aNXaXhUv54W3wRFTlVrW4ue31mk4cq1/DQ0rl1Lyzl9zHeVlnbFwS7A1aIzje6DsZvN27ef5Q2tjItftKws4dUZIULfraeUF8MVmhG9oL0mSqe+YKR69j5IUCQohB9dpJdFMV4XK9Hf0sMbYnxUu5a5+T5O0dKkeK2dpdkpcb3ojczq9WbzppcTbUivBcu/5IEpWq0pFfKbYXGb98tFbkL0bHSq/F6fdqeQ1ckHMbou3jv7zGnRbiW6MT6y9kaMmdhLUHwzSekD9zwgcL3ozGn3wdjtZ2nNcqIN6TUaERJUy2hagrxsMas2LLo2w4bK432yWrpEjmIz4pi7VsfUYiW66c41qn2xTl37nz2eEJ1nYKf7YDq/nyVDq/qt2/yQxVS2DC5bPGVsWHRjfDC0QPN3I9JMBsrH9IacPvyxEp3o8NFMVRPaPzpBkwv36WEi5convZ4QnXG6D+bMlhNtOFyfFgIY5YtRtoxQxKpJa4HojuL4Kae16Ex2c5ECl0zNbiV+GglH6ZWLlho9IzpTb7nxrJcTLTl6TJPil16uYQsUDwsJxu/Tq/JRJ2mB6GOrKWNN2ypHzdbo1eT3U7S9fp/mw9M0NCSO19Ln+M7Rfjwler3G1C7tbEBPYhKb97KY9sJImzedeqKbvkDVopvKpYUtMdYKnIleRTFHGwv684QJWt0T4x3GU6IzdvtgrNL2BlSCUaoEKbJ8U/zig7Rit4NrP0oBIZasjk8/ECsrWqpFN632+GYoJv1Ov6GYVqevrG/RdrpmLZ234kpXSCxEP0hRPHqP5hcWKSZrRJ8viM/pp/kdMdZhPCc6z8x2+2Bk6Qim5rOSuuvKpm0EmiTXVxKU5lJDKw3iyxPU7/NXGsBa0enYtEZfu45ezNDG3YnK0ubspknqQoLmS1txtYbyZu3OSyvRjaXKvpB2xzKvIB2laCUk6nZfmDZc0ph6TnTGbrmxNp3853HGU9By6m32YvLP9DtBbfwU+DVaEe+E6Bp5rfQxnlZqEl7ip5VXqF/8mTOkCVv1oMpULvUO3KzZeWlduqSjU6bPKZ6Mjpm3A2hf1PWTn7FTeFJ0xq4x1XOmDagM03ZcR9t3BdnnizRmaup6h4I0u861vSGeTPQS0r0uLP0Uza2nTj6N1Wb0yFj5C3niS1CnRrdadSntddnFXpeW4KQx9fo/j8sfnWaFpAbzjkIH58hLj7EXXaf0OfVrYfdi67HbB4P/n6UFFLcqoo89cE8Z0gieFt1uVj/b5cRuI0fZZIJWb10R5YjF3hwP4WnRGVlj2onlxO7CVLJo4Qc/VSsrHsTzovPMbW5M8f+ztIIkLZX2l0/T7NoWZT0uOeN50RnzPhivN6CgPXSF6AzP6h1fTgSupWtE5xIGszmwomtEB8AOiA6UAKIDJYDoQAkgOlACiA6UAKIDJYDoQAkgOlACiA6UAKIDJYDoQAkgOlACiA6UAKIDJYDoQAkgOlACiA6UAKIDJYDoQAkgOlACiA6UAKIDJejJ5XKEIN2enkwmQwjS3cnQ/yFvx9GvGUZJAAAAAElFTkSuQmCC',
      'data:image/png;base64,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',
    ],
    imgNum: 3,
    autoplay: true,
    defaultIndex: 0,
    direction: 'horizontal',
    draggable: false,
    interval: 3000,
    showArrow: false,
    showDots: false,
  },
  componentPropsMeta: {
    imgUrl: {
      name: '图片信息',
      keyname: '图片源地址',
      fieldComponent: 'handle-array-attribute',
    },
    autoplay: {
      name: '是否自动播放',
      fieldComponent: 'n-switch',
    },
    defaultIndex: {
      name: '默认显示页',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 2,
      },
    },
    direction: {
      name: '轮播图的显示方向',
      fieldComponent: 'select-attribute',
      fieldComponentParam: {
        selectOptions: [
          {
            label: '水平的',
            value: 'horizontal',
          },
          {
            label: '垂直的',
            value: 'vertical',
          },
        ],
      },
    },
    draggable: {
      name: '是否通过鼠标拖拽切换轮播图',
      fieldComponent: 'n-switch',
    },
    interval: {
      name: '自动播放时间间隔',
      fieldComponent: 'slider-attribute',
      fieldComponentParam: {
        maxNum: 6000,
        minNum: 1000,
        step: 1000, // 滑动灵敏度
      },
    },
    showArrow: {
      name: '是否显示箭头按钮',
      fieldComponent: 'n-switch',
    },
    showDots: {
      name: '是否展示指示点',
      fieldComponent: 'n-switch',
    },
    addImage: {
      name: '添加照片',
      fieldComponent: 'upload-image-attribute',
    },
  },
  style: '',
}
