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

const RPC = async ({ baseUrl, params }: { baseUrl: string; params: ConditionalProps }) => {
  const { method, ...rest } = params
  const result = await axios
    .post(baseUrl, {
      jsonrpc: '2.0',
      method: method,
      id: 23432,
      params: rest,
    })
    .then((res: any) => {
      if (res?.data?.error) {
        throw res?.data?.error
      } else {
        return res?.data?.result
      }
    })
    .catch((err: any) => {
      throw err
    })

  return result
}

export default RPC
