import React, {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

export const Home = () => {
    const [keres, setKeres] = useState("");
    const [adatok, setAdatok] = useState([]);
    const[showTable, setShowTable] = useState(false);
    const[selectadatok,setSelectAdatok] = useState('');
    const [ toggle, setToggle] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:3001/adatok`)
        .then(data => setAdatok(data.data))
        .catch(err => console.log(err));
    })

    const toggleTable = (id) => {
        setShowTable(showTable === id ? null : id);
    };


    return (
        <>
        <div className="row">
            <div className="col-md-4" style={{backgroundColor:"beige"}}>
                <h3>Központi felvételi tájékoztató</h3>
                <p>A középiskolába történő jeletkezés során az <br/> iskolák határozzák meg, hogy a felvételi rangsort <br/>  mi a alaapján döntik el. A Jószakma Szakgimmnázium <br/> a felvételi során az általános iskolából hozott és a <br/> központi felvételin szerzett pontok alapján <br/> rangsorolja az iskolába jeletkezőket.</p>
                <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztaató oldal</a>
                <br/>
                <img src="logo.png" alt="" srcset="" />
            </div>
            <div className="col-md-4">
                <h1>Tájékoztatás</h1>
                <h3>Jószakma Szakgimmázium</h3>
                <p>A központi felvételi magyar és irodalom,<br/> illetve matematika tantárgyakból írják a<br/>jelentkezők. Mindkét tárgy esetén legfeljebb 50<br/> pont szerezhető. A felvételiző hozott pontjait az<br/>általános iskolai év végi eredményei alapján<br/>számolják, ez a pontszám legfeljebb 50 pont<br/>lehet. A hozott pontokat duplázzák. A központi<br/>felvételin szerzett és a hozott pontok összessége<br/>adja a felvételiző összesített pontszámát.</p>
                <img src="e-mail-marketing-2745489__340.jpg" alt="" srcset="" className="img"/>
            </div>
            <div className="col-md-4" style={{backgroundColor:"beige"}}>
                <h3>Az oldal használatáról</h3>
                <p>Ön az oldal használatávaal a következö <br/> Információhoz juthat hozzá.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                <label>Válasz ki melyik ágazat adatait szeretnéd látni:</label>
                <br />
                    <select value={selectadatok} onChange={(e) => setSelectAdatok(e.target.value)} required style={{width:'200px',height:"auto"}}>
                        {adatok.map((adat) => (
                            <option value={adat.akod} key={adat.akod}>{adat.agazat}</option>
                        ))}
                    </select>
                <br />
                <button type="sumbit" onClick={() => setToggle(!toggle)} style={{margin:"5px"}}>Adatok</button>
                {toggle && (
                
                )}
            </div>
            <div className="col-md-6"></div>
        </div>
        </>
    )
}