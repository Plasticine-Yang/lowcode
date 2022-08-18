import { defineStore } from 'pinia'
interface form {
  formList: any
}

const initFormState = (): form => ({
  formList: localStorage.getItem('formList') || [],
})

export const useForm = defineStore('theme', {
  state: initFormState,

  actions: {
    setForm(form: string) {
      this.formList.push(form)
      localStorage.setItem('formList', this.formList)
    },
  },
})
