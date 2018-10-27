export interface ErrorableRequest {
  error: {
    message: string
  } | null
}
