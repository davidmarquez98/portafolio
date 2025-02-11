import HomeIcon from '@mui/icons-material/Home';

import { useSelector } from 'react-redux';

function IconoHome({ className }){

    const mode = useSelector((state) => state.mode.value);

    return (<HomeIcon className={`icono-default__color light ${className}`}/>);
};

export default IconoHome;