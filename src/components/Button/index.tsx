import clsx from "clsx"

interface IButton {
  label: string
  className?: string
  onClick: () => void
  [key: string]: any
}

const Button = ({ label, className, onClick, ...rest }: IButton) => {
  return (
    <button className={clsx("bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded", className)} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}


export default Button