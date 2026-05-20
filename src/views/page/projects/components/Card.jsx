

import { FaCodeBranch } from "react-icons/fa";
import { useSelector } from 'react-redux';

import { Trans } from 'react-i18next';

function Card(props){

    const mode = useSelector((state) => state.mode.value);

    return (
        <div className="bg-[var(--primary-color)] dark:bg-[var(--primary-color-dark-mode)] rounded-[10px] w-full max-w-[600px] mx-auto p-[20px] relative">
            <div className="relative flex flex-col">
                <div className="flex mb-[10px] gap-[60px] items-center">
                    <h5 className="text-[24px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">TODO</h5>
                    <div className="text-[var(--secondary-color)] flex gap-[5px] items-center">
                        <FaCodeBranch className="text-[20px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]"/>
                        <div className="text-center">
                        <span className="text-[12px] dark:text-[var(--quaternary-color-dark-mode)]"><b>En desarrollo..</b></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <div className="flex-1">
                        <p className="text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                            <Trans i18nKey="project.todo.description" components={{ b: <b /> }}/>
                        </p>
                        <div className="flex gap-[10px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] mt-[10px]">
                            {
                                props.iconos.map((Icono, index) => {
                                    return (
                                        <div className="text-[40px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]" key={index}>
                                            { Icono }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[10px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                        <b>?</b>
                        <b>LOGO</b>
                    </div>
                </div>
                {
                    props.isDisabled ?  <div className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-[10px] -translate-x-1/2 -translate-y-1/2 opacity-[1] text-[#4E4E4E] transition-all duration-300 ease-[ease]">
                                            <FaCodeBranch className="text-[24px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]"/>
                                            <span className="text-[16px] dark:text-[var(--quaternary-color-dark-mode)]"><b>En desarrollo..</b></span>
                                        </div>  : <></>
                }
            </div>
            <div className="transition-all duration-300 ease-[ease] absolute inset-0 rounded-[10px] bg-transparent shadow"></div>
        </div>
    )
} 

export default Card;