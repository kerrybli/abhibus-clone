import { useState } from "react"
import "./Css/Search.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

function SearchBox() {
    const [city, setCity] = useState("");
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [show, setShow] = useState(false)
    const [guest, setGuest] = useState("1 Adult 0 children")
    const history = useHistory();

    const handlesubmit = (e) => {
        // console.log("city",city,checkin,checkout,guest)
        if (city === "") {
            alert("Enter City")
        } else {
            setShow(true);
            history.push({
                pathname: "/showHotels",
                state: {
                    city: city,
                    checkin: checkin,
                    checkout: checkout,
                    guest: guest
                }
            });
        }

    }
    return (

        <div className="flex_p margin_searchBox_p">
            <div className="border_p border_start">
                <div className="floating-label-group">
                    <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtkWGReHSyMejXT_WTXa2ipCUJj5DfqhVSIfY-_-sBXY9cqi-ducWorRKOpNBifTDM14&usqp=CAU" alt="icon" />
                    <input type="text" className="form-control input_searchBox_p" name="city" onChange={(e) => { setCity(e.target.value) }} autoComplete="off" required />
                    <label className="floating-label">Search By City,Hotel or Area</label>
                </div>
            </div>

            <div className="border_p">
                <div className="floating-label-group">
                    <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmGZcO1ksv2HDnWZCe8dZcYA8MFNNGCeX6LEfGdXlJ50op3pMvKLedXuy9bc5S_r8oUg&usqp=CAU" alt="icon" />
                    <label className="floating-label2">Check In</label>
                    <DatePicker className="color_p input_searchBox_p" selected={checkin} onChange={(date) => setCheckin(date)} />

                </div>
            </div>

            <div className="border_p">
                <div className="floating-label-group">

                    <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmGZcO1ksv2HDnWZCe8dZcYA8MFNNGCeX6LEfGdXlJ50op3pMvKLedXuy9bc5S_r8oUg&usqp=CAU" alt="icon" />
                    <label className="floating-label2">Check Out</label>
                    <DatePicker className="color_p input_searchBox_p" selected={checkout} onChange={(date) => setCheckout(date)} />

                </div>
            </div>

            <div className="border_p">
                <div className="floating-label-group">
                    <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwi3UjTtpRPBEvJKLBtlndABG88b7nCsReXzJkrddFO9-TcWBHUAv6f6vQBqKDsBsak&usqp=CAU" alt="icon" />
                    <input type="text" className="form-control" name="guest" onChange={(e) => { setGuest(e.target.value) }} autoComplete="off" required />
                    <label className="floating-label">1 Adult,0 Children,1 Room</label>
                </div>
            </div>


            <button className="button_search" onClick={handlesubmit}>Search</button>

        </div>
    )
}


export default SearchBox