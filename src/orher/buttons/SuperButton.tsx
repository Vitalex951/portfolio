import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    styleBtn?: object
}


const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        styleBtn, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {


    return (
        <button
            className={s.pressedButton}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
