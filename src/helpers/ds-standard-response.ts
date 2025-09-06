export interface DsStandardResponseData<T> {
  status: number;
  message: string;
  data?: T;
  total?: number;
}

export function DsStandardResponse<T>(
  status: number,
  message: string,
  data?: T,
  total?: number,
): DsStandardResponseData<T> {
  return {
    status,
    message,
    data,
    total,
  };
}
