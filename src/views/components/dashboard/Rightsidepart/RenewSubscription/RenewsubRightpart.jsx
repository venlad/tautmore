import React from 'react';
import { payment } from './mockData/Renewdata';
import { chevRight } from '../../../../../assets/icons/IconList';

const RenewsubRightpart = () => (
    <div className="renew-right-main">
        {payment.map((pay) => (
            <div className="payment-main" key={pay.name}>
                <h3>{pay.name}</h3>

                {pay.data.map((data) => (
                    <div className="row payment-data" key={data.title}>
                        <div className="col-md-8 col-sm-8 col-12">
                            <label htmlFor="payment-label">{data.title}</label>
                            <h4>{data.type}</h4>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12">
                            <p>{data.price}</p>
                        </div>
                    </div>
                ))}
                <div className="row total-data">
                    <div className="col-md-7 col-sm-7 col-12">
                        <h4>Grand total</h4>
                    </div>
                    <div className="col-md-5 col-sm-5 col-12">
                        <h3>USD 111.00</h3>
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="payment-process">Proceed to payment<span>{chevRight}</span></button>
                </div>
            </div>
        ))}
    </div>
);

export default RenewsubRightpart;
