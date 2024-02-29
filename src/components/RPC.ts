import axios from 'axios'
import interfaces from './interfaces'

export interface CommonParamsByCriteria {
  auth_name: string
  auth_pass: string
  auth_remoteaddr: string
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
export interface CommonParamsBySession {
  auth_session: string
  auth_remoteaddr: string
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
export interface CommonParamsAnonymous {
  auth_type: 'ANONYMOUS'
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
type CommonParams = CommonParamsByCriteria | CommonParamsBySession | CommonParamsAnonymous

type ConditionalProps = CommonParams & interfaces

const RPC = (() => {
  var privateBaseUrl = ''
  var privateMethod = ''
  var privateProps = {}

  var privateCall = async () => {
    const result = await axios
      .post(privateBaseUrl, {
        jsonrpc: '2.0',
        method: privateMethod,
        id: new Date().getTime(),
        params: privateProps,
      })
      .then((res) => {
        if (res?.data?.error) {
          throw res?.data?.error
        } else {
          return res?.data?.result
        }
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  return {
    config: ({ baseUrl }: { baseUrl: string }) => {
      privateBaseUrl = baseUrl
    },
    call: async ({ method, ...rest }: ConditionalProps) => {
      privateMethod = method
      privateProps = rest

      return privateCall()
    },
  }
})()

export default RPC
