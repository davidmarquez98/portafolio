import PersonIcon from '@mui/icons-material/Person';

import { useSelector } from 'react-redux';

function IconoAboutMe({ className }){

    const mode = useSelector((state) => state.mode.value);

    return (<PersonIcon className={`icono-default__color ${mode} ${className}`}/>);
};

export default IconoAboutMe;