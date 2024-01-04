export enum ResponseCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export class ApiError {
  constructor(
    public code: ResponseCodes,
    public message: string,
    public status?: number,
  ) {}

  toMap(): Omit<ApiError, 'toMap'> {
    return {
      code: this.code,
      message: this.message,
      status: this.status,
    };
  }
}
