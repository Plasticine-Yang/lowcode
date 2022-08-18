import { defineStore } from 'pinia'
interface form {
  formList: any
}

const initFormState = (): form => ({
  formList: [],
})

export const useForm = defineStore('form', {
  state: initFormState,

  actions: {
    setForm(form: any, id: string) {
      //只要有一个就返回true
      const isHas = this.formList.some((x: any) => {
        return x.id == id
      })
      if (isHas) {
        for (let item in this.formList) {
          if (this.formList[item].id == id) {
            this.formList[item] = { id, ...form }
          }
        }
      } else {
        this.formList.push({ id, ...form })
      }
      // localStorage.setItem('formList', JSON.stringify(this.formList))
    },
  },
})
