import { MouseEventHandler, ReactNode } from "react";

type Button = 'success' | 'warning'

interface IProps {
    children: ReactNode
    type?: Button
    onclick?: MouseEventHandler<HTMLButtonElement>
    className?: string
    disabled?: boolean
}

export const Button = ({children, type, onclick, className, disabled}:IProps) => {
    const getButtonClass = (buttonType?: Button) => {
        switch (buttonType) {
            case 'success':
                return 'bg-success hover:shadow-success/40'
            case 'warning':
                return 'bg-warning hover:shadow-warning/40'
            default:
                return 'bg-secondary hover:shadow-secondary/40';
        }
    }
    const classButton = `text-lg px-6 py-3 rounded-lg font-light hover:shadow-lg transition-all ${getButtonClass(type)} ${className || ''}`
  return <button disabled={disabled} className={classButton} onClick={onclick}>{children}</button>;
};
