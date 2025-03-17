import GithubIcono from '@mui/icons-material/GitHub';

import { useSelector } from 'react-redux';

function IconoGithub({ className }){

    const mode = useSelector((state) => state.mode.value);

    return (<GithubIcono className={`icono-default__color light ${className}`}/>);
};

export default IconoGithub;