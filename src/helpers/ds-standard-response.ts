export interface DsStandardResponseData<T> {
  status: number;
  message: string;
  data?: T;
}

export function DsStandardResponse<T>(
  status: number,
  message: string,
  data?: T,
): DsStandardResponseData<T> {
  return {
    status,
    message,
    data,
  };
}
