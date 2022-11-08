import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import './ValidatorInfo.css'

function ValidatorInfo(props) {

    const headers = [
        { key: "name", label: "VALIDATOR NAME" },
        { key: "active_status", label: "STATUS" },
        { key: "bonded_tokens", label: "TOTAL STAKE" },
        { key: "commission", label: "COMMISSION" },
        { key: "one_day_apy", label: "APY-1DAY" },
        { key: "seven_day_apy", label: "APY-7DAYS" },
        // { key: "thirty_day_apy", label: "APY-30DAYS" },
        { key: "", label: "Est. RETURNS / DAY" },
        { key: "delegate_link", label: "DELEGATE" }

    ];
    const [validatorDetails, setValidatorDetails] = useState([]);
    const [order, setOrder] = useState('ASC');
    const [APY, setAPY] = useState([]);
    const [one_day, setOne_day] = useState([]);
    const [seven_day, setSeven_day] = useState([]);


    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...validatorDetails].sort((a, b) =>
                (col == 'bonded_tokens' | 'commission') ? Number(a[col]) - Number(b[col]) : (a[col] > b[col]) ? 1 : -1
            )
            setValidatorDetails(sorted)
            setOrder('DSC')
        }
        if (order === 'DSC') {
            const sorted = [...validatorDetails].sort((a, b) =>
                (col == 'bonded_tokens' | 'commission' | 'one_day_apy' | 'seven_day_apy' | 'thirty_day_apy') ? Number(b[col]) - Number(a[col]) : (b[col] > a[col]) ? 1 : -1
            )
            setValidatorDetails(sorted)
            setOrder('ASC')
        }

    }

    function setEventDetails() {
        axios.get("https://collatorstats.brightlystake.com/query/axelar/getValidators")
            .then((res) => {
                setValidatorDetails(res.data.data)
                //console.log(res.data.data)
            });
    }
    function setApyValues() {
        axios.get("https://collatorstats.brightlystake.com/query/axelar/getValidatorsApy")
            .then((res1) => {
                setAPY(res1.data.data)
                console.log(res1.data.data)
            });
    }

    useEffect(() => {
        setEventDetails();
        setApyValues();
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
                        var url1 = 'https://wallet.keplr.app/chains/axelar?modal=validator&chain=axelar-dojo-1&validator_address=' + val.valoper
                        var url2 = "https://axelar.brightlystake.com/validator/" + val.valoper;
                        var one_day = 0, seven_day = 0
                        APY.forEach((e) => {
                            if (e.valoper == val.valoper) {
                                one_day = e.one_day
                                seven_day = e.seven_day
                            }
                        }
                        )
                        return (
                            <tr className={val.name === "BRIGHTLYSTAKE" ? "decorate" : "NO"} key={val.name}>
                                <td className='validator'>{String(val.name).toUpperCase()}</td>
                                <td className={val.active_status === "INACTIVE" ? "InActive" : "Active"}> {val.active_status}</td>
                                <td>{parseInt(val.bonded_tokens).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{(parseFloat(val.commission) * 100).toFixed(2)}%</td>
                                <td><a href={url2}>{parseFloat(one_day).toFixed(1)}%</a></td>
                                <td>{parseFloat(seven_day).toFixed(1)}%</td>
                                <td className='green'>{((parseFloat(seven_day).toFixed(1) / 36500) * props.value).toFixed(3)} AXL</td>
                                {/* <td>{parseFloat(val.thirty_day_apy).toFixed(1)}</td>
                                <td>{ }</td> */}
                                <td><a href={url1}>Delegate</a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ValidatorInfo

