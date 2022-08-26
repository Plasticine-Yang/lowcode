import { Encrypt } from 'rsa-encrypt-long'

const cryptor = new Encrypt()
const publicKey = cryptor.getPublicKey()
const privateKey = cryptor.getPrivateKey()

cryptor.setPublicKey(publicKey)
cryptor.setPrivateKey(privateKey)

// 加密
export const encrypt = (data: string) => {
  return cryptor.encryptLong(data)
}
// 解密
export const decrypt = (data: string) => {
  return cryptor.decryptLong(data)
}
