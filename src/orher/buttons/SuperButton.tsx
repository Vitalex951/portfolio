import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import './SuperButton.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    styleBtn?: string
}


const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        styleBtn, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

const classBtn = styleBtn? styleBtn: ''

    return (
        <button
            className={classBtn}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
