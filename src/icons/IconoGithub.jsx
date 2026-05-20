import GithubIcono from '@mui/icons-material/GitHub';

function IconoGithub({ className }){
    return (<GithubIcono className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
};

export default IconoGithub;