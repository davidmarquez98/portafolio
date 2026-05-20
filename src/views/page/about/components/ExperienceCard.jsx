function ExperienceCard({ title, position, time, description, logo, logo_class }){

    return(
        <article className="flex h-full w-full flex-col justify-between rounded-[8px] bg-[var(--primary-color)] shadow dark:bg-[var(--primary-color-dark-mode)]">

            <div className="flex flex-row flex-wrap gap-[16px] p-[22px_22px_0] text-[18px] max-[800px]:flex-nowrap max-[800px]:gap-[10px] max-[800px]:p-[20px_20px_0]">
                <div className="flex w-full flex-col gap-[10px] min-[640px]:w-[calc(100%-112px)] max-[800px]:gap-[2px]">
                    <h3 className="text-[20px] leading-[1.2] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[15px]">{title}</h3>
                    <h3 className="text-[17px] leading-[1.25] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[13px]">{position}</h3>
                    <h3 className="text-[16px] leading-[1.25] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[13px]">{time}</h3>
                </div>
                <div className="flex w-full items-center justify-start min-[640px]:w-[96px] min-[640px]:justify-center max-[800px]:w-[56px] max-[800px]:justify-center">
                    <img className={logo_class} src={logo} alt={title} />
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full">
                    <div className="flex flex-col p-[18px_22px_24px] max-[800px]:p-[10px_15px_15px]">
                        <p className="leading-[1.45] text-[15px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[10px] max-[800px]:leading-[1.3]">{description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ExperienceCard;
