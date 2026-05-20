import EmailIcon from '@mui/icons-material/Email';

function IconoEmail({ className }){
    return (<EmailIcon className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
};

export default IconoEmail;