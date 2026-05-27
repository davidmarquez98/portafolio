import Mode from './../mode/Mode.jsx';
import Languages from './../languages/languages.jsx';
import './menuBurguer.css';

export default function MenuBurguer() {
  return (
    <div className="burguer-container hidden min-[800px]:flex">
        <div className="burguer-content">
            <Languages/>
            <Mode />
        </div>
    </div>
  );
}
