import React from 'react'
import './Cards.css'
export default function Cards() {
    return (

        <body>
            <div class="container">
                <div class="heading">
                    <h4>Factors affecting returns in Staking</h4>
                </div>
                <div class="row">
                    <div class="card">
                        <div class="card-header">
                            <h3>Total Staked</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                If all the tokens are staked inflation = apy. If the tokens staked is lower the returns will he higher and vice versa
                            </p>
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h3>External chains</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                Each external chain gets 1% inflation rewards currently. So validator with maximum chains supported will get maximum returns
                            </p>
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h3>Commission</h3>
                        </div>
                        <div class="card-body">
                            <p>
                            Minimum commission for a validator is 5%. To get higher returns choose the validator with lowest commission.
                            </p>
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h3>Slashing</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                Slashing can be of 2 types, where you lose your capital and where you dont loose the capital but lose rewards
                            </p>
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="heading">
                    <h4>Axelar Validator Stats</h4>
                    <p>Click on each of the validator to get the historic details</p>
                </div>
            </div>
        </body>
    )
}
