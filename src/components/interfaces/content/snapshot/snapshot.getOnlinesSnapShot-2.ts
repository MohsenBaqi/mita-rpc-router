/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SnapshotGetOnlinesSnapShot {
  method: "snapshot.getOnlinesSnapShot";
  auth_type?: "ADMIN";
  conds: {
    ras_ips?: unknown[] | string;
    isp_names?: unknown[] | string;
    [k: string]: unknown;
  };
  type: "internet" | "voip";
}