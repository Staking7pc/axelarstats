import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ValidatorInfo.css'
function ValidatorInfo() {
    const headers = [
        { key: "validator_name", label: "VALIDATOR NAME" },
        { key: "active_status", label: "STATUS" },
        { key: "total_stake", label: "TOTAL STAKE" },
        { key: "commission", label: "COMMISSION" },
        { key: "one_day_apy", label: "APY-1DAY" },
        { key: "seven_day_apy", label: "APY-2DAYS" },
        { key: "thirty_day_apy", label: "APY-30DAYS" },
        { key: "", label: "CHAINS SUPPORTED" },
        { key: "delegate_link", label: "DELEGATE" }

    ];
    const [validatorDetails, setValidatorDetails] = useState([]);
    const [lastUpdated, setLastUpdated] = useState([]);

    function setEventDetails() {
        axios.get("https://collatorstats.brightlystake.com/query/axelar/getValidatorDetails")
            .then((res) => {
                setValidatorDetails(res.data.data)
                setLastUpdated(res.data.data[0].as_of_time)
                console.log(res.data.data)
            });
    }
    useEffect(() => {
        setEventDetails();
    }, [])


    return (
        <table id='validators'>
            <thead>
                <tr className='header'>
                    {headers.map((row) => {
                        return <td key={row.key}>{row.label}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    validatorDetails.map((val) => {
                        return (
                            <tr key={val.validator_name}>
                                <td>{val.validator_name}</td>
                                <td className={val.active_status === "INACTIVE" ? "InActive" : "Active"}> {val.active_status}</td>
                                <td>{parseInt(val.total_stake).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{(parseFloat(val.commission) * 100).toFixed(2)}%</td>
                                <td>{val.one_day_apy}%</td>
                                <td>{val.seven_day_apy}%</td>
                                <td>{val.thirty_day_apy}</td>
                                <td>{5}</td>
                                <td><a href=''>Delegate</a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ValidatorInfo

