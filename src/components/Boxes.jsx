    import React, {useEffect, useState } from 'react'
    import axios from 'axios';
    import './Boxes.css'
    export default function Boxes() {

        const [consts, setConsts] = useState([]);

        function setGeneralConsts() {
            axios.get("https://collatorstats.brightlystake.com/query/axelar/getConsts")
                .then((res) => {
                    setConsts(res.data.data[0])
                    console.log(res.data.data[0])
                });
        }
        useEffect(() => {
            setGeneralConsts();
        }, [])

        return (
            <body>
                <div class="container">
                <div class="heading">
                        <h4>AXELAR VALIDATOR STATS</h4>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box-header">
                                <h3>Total Issuance</h3>
                            </div>
                            <div class="box-body">
                                <h3>{parseFloat(consts.totalIssuance).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} AXL</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>External chains</h3>
                            </div>
                            <div class="box-body">
                                <h3>{consts.external_chain}</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Validators</h3>
                            </div>
                            <div class="box-body">
                                <h3>{consts.max_validators}</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Inflation</h3>
                            </div>
                            <div class="box-body">
                                <h3>15%</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Unstake duration</h3>
                            </div>
                            <div class="box-body">
                                <h3>{consts.unstake_duration} days</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Max APY</h3>
                            </div>
                            <div class="box-body">
                                <h3>{consts.max_apy}%</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Total Staked</h3>
                            </div>
                            <div class="box-body">
                                <h3>{parseFloat(consts.total_staked).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} AXL</h3>
                            </div>
                        </div>                                        
                        <div class="box">
                            <div class="box-header">
                                <h3>Min Commission</h3>
                            </div>
                            <div class="box-body">
                                <h3>5%</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-header">
                                <h3>Slashing</h3>
                            </div>
                            <div class="box-body">
                                <h3>Yes</h3>
                            </div>
                        </div>         
                        <div class="box">
                            <div class="box-header">
                                <h3>Rewards distribution</h3>
                            </div>
                            <div class="box-body">
                                <h3>Every block</h3>
                            </div>
                        </div>     
                        <div class="box">
                            <div class="box-header">
                                <h3>Every day</h3>
                            </div>
                            <div class="box-body">
                                <h3>~ {parseFloat(((parseFloat(consts.totalIssuance)) * 0.15)/365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} AXL</h3>
                            </div>
                        </div>   
                        <div class="box">
                            <div class="box-header">
                                <h3>Every hour</h3>
                            </div>
                            <div class="box-body">
                                <h3>~ {parseFloat(((parseFloat(consts.totalIssuance)) * 0.15)/8760).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} AXL</h3>
                            </div>
                        </div>       
                        <div class="box">
                            <div class="box-header">
                                <h3>Every minute</h3>
                            </div>
                            <div class="box-body">
                                <h3>~ {parseFloat(((parseFloat(consts.totalIssuance)) * 0.15)/525600).toFixed(0)} AXL</h3>
                            </div>
                        </div>   
                        <div class="box">
                            <div class="box-header">
                                <h3>Last updated (UTC)</h3>
                            </div>
                            <div class="box-body">
                                <h3>{consts.time}</h3>
                            </div>
                        </div>   
                    </div>
                </div>
            </body>
        )
    }
