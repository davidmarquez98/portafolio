function ExperienceCard({ title, position, time, description, logo, logo_class }){

    return(
        <article className="experience-card flex h-full w-full flex-col justify-between rounded-[8px] bg-[var(--primary-color)] shadow dark:bg-[var(--primary-color-dark-mode)]">

            <div className="experience-card__header flex flex-row items-start justify-between gap-[18px] text-[18px] max-[800px]:gap-[10px]">
                <div className="flex min-w-0 flex-1 flex-col gap-[10px] max-[800px]:gap-[2px]">
                    <h3 className="text-[20px] font-bold leading-[1.2] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[15px]">{title}</h3>
                    <h3 className="text-[17px] font-bold leading-[1.25] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[13px]">{position}</h3>
                    <h3 className="text-[16px] font-bold leading-[1.25] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[13px]">{time}</h3>
                </div>
                <div className="flex shrink-0 items-start justify-end">
                    {logo ? (
                        <img className={logo_class} src={logo} alt={title} />
                    ) : (
                        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[8px] bg-[#D5CAC7] text-[20px] font-bold text-[var(--secondary-color)] dark:bg-[var(--secondary-color-dark-mode)] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:h-[48px] max-[800px]:w-[48px] max-[800px]:text-[15px]">
                            BM
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full">
                    <div className="experience-card__body flex flex-col">
                        <p className="leading-[1.45] text-[15px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)] max-[800px]:text-[10px] max-[800px]:leading-[1.3]">{description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ExperienceCard;
