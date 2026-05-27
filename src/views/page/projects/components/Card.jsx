

import { FaCodeBranch } from "react-icons/fa";

import { Trans } from 'react-i18next';

function Card(props){

    return (
        <article className="relative mx-auto w-full max-w-[760px] rounded-[8px] bg-[#E5DDBE] p-[24px] shadow dark:bg-[var(--primary-color-dark-mode)]">
            <div className="relative flex flex-col">
                <div className="flex mb-[18px] flex-wrap gap-[16px] items-center justify-between">
                    <h5 className="text-[24px] leading-[1.2] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">{props.title}</h5>
                    <div className="flex items-center gap-[7px] rounded-[999px] bg-[rgb(252_243_207_/_0.75)] px-[12px] py-[6px] text-[var(--secondary-color)] dark:bg-[rgb(111_133_113_/_0.35)]">
                        <FaCodeBranch className="text-[20px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]"/>
                        <span className="text-[13px] dark:text-[var(--quaternary-color-dark-mode)]"><b>En desarrollo</b></span>
                    </div>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-[24px] max-[800px]:grid-cols-1">
                    <div className="flex-1">
                        <p className="leading-[1.45] text-[15px] text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
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
                    <div className="flex min-w-[130px] flex-col items-center justify-center gap-[8px] rounded-[8px] border border-[#B08879] p-[18px] text-center text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)]">
                        <FaCodeBranch className="text-[32px]" />
                        <b className="text-[14px]">Próximamente</b>
                    </div>
                </div>
            </div>
        </article>
    )
} 

export default Card;
