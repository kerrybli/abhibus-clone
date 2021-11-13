// import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import { DisplayBusDetails } from './DisplayBusData/DisplayBusData';
// import { useNavigate, createSearchParams } from "react-router-dom";
// import { Test } from './Test';




const BookBusTickets = () => {

    // const navigate = useNavigate();
    const history = useHistory();

    const [busData, setBusData] = React.useState([]);

    // React.useEffect(() => {
    //     console.log("Ogg", busData)

    // }, [busData])

    // const getData = async (from, to) => {
    //     const { data } = await axios.get("http://localhost:2924/bus", {
    //         params: {
    //             from: from,
    //             to: to
    //         }
    //     })
    //     // return setBusData(data)
    //     console.log('data:', data)
    //     return data;

    // }



    const [formData, setFormData] = React.useState({
        leaving: "",
        going: "",
        dateOfJourney: "",
        dateOfReturn: "",
    });

    const [formDetails, setFormDetails] = React.useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    // const fun = async () => {
    //     let datass = await getData(formData.leaving, formData.going);
    //     console.log('datass:', datass)
    //     // setBusData(datass)
    //     history.push({
    //         pathname: "/bus-details",
    //         state: {
    //             leaving: datass.busName,
    //             // price: busData.price

    //         }
    //     });


    // }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormDetails([...formDetails, formData])
        // setFormData("")
        // getData(formData.leaving, formData.going);
        // fun()
        history.push({
            pathname: "/bus-details",
            state: {
                leaving: formData.leaving,
                going: formData.going
                // price: busData.price

            }
        });
        console.log(busData);
        // navigate({
        //     pathname: "/bus-details",
        //     search: `?${createSearchParams({
        //         leaving: formData.leaving
        //     })}`
        // })


    }


    return (
        <>
            <div className="text-center border border-danger bg-danger">
                <h2 className="my-4 text-white">Book Bus Tickets</h2>

                {/*Booking Buttons Start */}

                <div className="my-4">
                    <button
                        className="btn bg-white border border-primary rounded-pill"
                    >Bus</button>
                    <button
                        className="btn bg-white border border-primary rounded-pill"

                    >Trains</button>
                    <button
                        className="btn bg-white border border-primary rounded-pill"
                    >Hotels</button>
                    <button
                        className="btn bg-white border border-primary rounded-pill"
                    >Rentals </button>
                </div>
                {/*Booking Buttons End */}

                {/* Search Box starts */}
                <div>
                    <form
                        onSubmit={handleSubmit}
                    >

                        <input
                            onChange={handleChange}
                            name="leaving"
                            type="text"
                            required
                            placeholder="Leaving from" />
                        <input
                            onChange={handleChange}
                            name="going"
                            type="text"
                            placeholder="Going to" />
                        <input
                            onChange={handleChange}
                            name="dateOfJourney"
                            type="date"
                            placeholder="Date of Journey" />
                        <input
                            onChange={handleChange}
                            name="dateOfReturn"
                            type="date"
                            placeholder="Date of Return (Optional)" />
                        <input
                            className="mb-5"
                            type="submit"
                            value="Search" />
                    </form>
                </div>
                {/* {console.log("Bus data from boottom", busData)} */}
                {/* Search Box ends */}


                {/* <Test busData={formDetails} /> */}
                {/* <DisplayBusDetails busData={formData} /> */}

            </div>
        </>
    );
}

export { BookBusTickets }