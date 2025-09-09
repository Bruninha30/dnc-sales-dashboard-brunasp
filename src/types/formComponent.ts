export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error ' | 'success'
}
export type FormComponentProps = {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
