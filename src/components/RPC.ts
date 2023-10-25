import axios from "axios";
import interfaces from "./interfaces";

export interface CommonParamsByCriteria {
  auth_name: string;
  auth_pass: string;
  auth_remoteaddr: string;
  date_type?: "gregorian" | "jalali" | "relative";
}
export interface CommonParamsBySession {
  auth_session: string;
  auth_remoteaddr: string;
  date_type?: "gregorian" | "jalali" | "relative";
}
type CommonParams = CommonParamsByCriteria | CommonParamsBySession;

type ConditionalProps = CommonParams & interfaces;

const RPC = async ({
  baseUrl,
  params,
}: {
  baseUrl: string;
  params: ConditionalProps;
}) => {
  let { method: _, ...rest } = params;
  const result = await axios
    .post(baseUrl, {
      jsonrpc: "2.0",
      method: params?.method,
      id: 23432,
      params: rest,
    })
    .then((res) => {
      if (res?.data?.error) {
        throw res?.data?.error;
      } else {
        return res?.data?.result;
      }
    })
    .catch((err) => {
      throw err;
    });

  return result;
};

export default RPC;
