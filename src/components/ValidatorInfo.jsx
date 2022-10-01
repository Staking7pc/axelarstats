import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import './ValidatorInfo.css'

function ValidatorInfo() {

    const headers = [
        { key: "validator_name", label: "VALIDATOR NAME" },
        { key: "active_status", label: "STATUS" },
        { key: "total_stake", label: "TOTAL STAKE" },
        { key: "commission", label: "COMMISSION" },
        { key: "one_day_apy", label: "APY-1DAY" },
        { key: "seven_day_apy", label: "APY-5DAYS" },
        { key: "thirty_day_apy", label: "APY-30DAYS" },
        { key: "", label: "CHAINS SUPPORTED" },
        { key: "delegate_link", label: "DELEGATE" }

    ];
    const [validatorDetails, setValidatorDetails] = useState([]);
    const [lastUpdated, setLastUpdated] = useState([]);
    const [order, setOrder] = useState('ASC');
    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...validatorDetails].sort((a, b) =>
                (col == 'total_stake' | 'commission' | 'one_day_apy' | 'seven_day_apy' | 'thirty_day_apy') ? Number(a[col]) - Number(b[col]) : (a[col] > b[col]) ? 1 : -1
            )
            setValidatorDetails(sorted)
            setOrder('DSC')
        }
        if (order === 'DSC') {
            const sorted = [...validatorDetails].sort((a, b) =>
                (col == 'total_stake' | 'commission' | 'one_day_apy' | 'seven_day_apy' | 'thirty_day_apy') ? Number(b[col]) - Number(a[col]) : (b[col] > a[col]) ? 1 : -1
            )
            setValidatorDetails(sorted)
            setOrder('ASC')
        }

    }

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
                        return <td onClick={() => sorting(row.key)} key={row.key}>{row.label}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    validatorDetails.map((val) => {
                        return (
                            <tr key={val.validator_name}>
                                <td className='validator'>{val.validator_name}</td>
                                <td className={val.active_status === "INACTIVE" ? "InActive" : "Active"}> {val.active_status}</td>
                                <td>{parseInt(val.total_stake).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{(parseFloat(val.commission) * 100).toFixed(2)}%</td>
                                <td>{val.one_day_apy}%</td>
                                <td>{val.seven_day_apy}%</td>
                                <td>{val.thirty_day_apy}</td>
                                <td>{ }</td>
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

