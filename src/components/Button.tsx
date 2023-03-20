/**
 * add '?' to make prop optional
 * add default value for color prop
 * */
interface Props {
  children: string
  // color?: string
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  onClick: () => void
}

export const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type='button' className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  )
}
