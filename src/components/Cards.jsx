import React from 'react'
import './Cards.css'
export default function Cards() {
    return (

        <body>
            <div class="container">
                <div class="heading">
                    <h4>Factors affecting APY in Staking</h4>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@staking7pc/how-total-staked-affects-apy-in-axelar-1d43602ef891" class="btn">Read more</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h3>External chains</h3>
                        </div>
                        <div class="card-body">
                            <p>
                                Each external chain gets 0.75% inflation rewards currently. So validator with maximum chains will get max returns
                            </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@staking7pc/how-external-chains-affect-your-rewards-in-axelar-b683f96b492e" class="btn">Read more</a>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@staking7pc/how-commission-affect-rewards-in-staking-axelar-96bdc81ff999" class="btn">Read more</a>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@staking7pc/slashing-in-axelar-fd084eed6852" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
