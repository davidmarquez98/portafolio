import { useSelector } from 'react-redux';



function ExperienceCard({ title, position, time, description, logo, logo_class }){

    const mode = useSelector((state) => state.mode.value);

    return(
        <div className="bg-[var(--primary-color)] dark:bg-[var(--primary-color-dark-mode)] rounded-[10px] w-[570px] h-[400px] mx-auto my-[20px] flex flex-col justify-center max-[800px]:w-[92vw] max-[800px]:h-auto">

            <div className="flex flex-row flex-wrap text-[18px] gap-[10px] p-[20px_20px_0]">
                <div className="flex gap-[12px] flex-wrap w-[75%] h-[80%] p-[0]">
                    <h3 className="text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]">{title}</h3>
                    <h3 className="text-[20px] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)]">{position}</h3>
                    <h3 className="text-[20px] text-[#B08879] dark:text-[var(--quaternary-color-dark-mode)]">{time}</h3>
                </div>
                <div className="flex w-[25%] items-center">
                    <div className="m-auto">
                        <img className={logo_class} src={logo} alt={title}></img>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-[60%]">
                <div className="w-full">
                    <div className="flex flex-col p-[10px_5px_15px_15px]">
                        <p className="leading-[1.3] text-[16px] text-[var(--secondary-color)] dark:text-[var(--quaternary-color-dark-mode)]">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;