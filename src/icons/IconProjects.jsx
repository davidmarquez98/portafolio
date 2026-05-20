import FolderIcon from '@mui/icons-material/Folder';

function IconoProjects({ className }){
    return (<FolderIcon className={`text-[var(--secondary-color)] dark:text-[var(--tertiary-color-dark-mode)] ${className}`} />);
};

export default IconoProjects;