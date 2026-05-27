import PersonIcon from '@mui/icons-material/Person';

function IconoAboutMe({ className }){
    return (<PersonIcon className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
}

export default IconoAboutMe;