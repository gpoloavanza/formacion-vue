export type ToastType = 'success' | 'error'

export interface ToastState {
    visible: boolean
    message: string
    type: ToastType
}