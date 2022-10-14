import { useRef, useEffect } from "react";
import React from "react";

export default function PayMe(props) {

  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "This is a table",
              amount: {
                currency_code: "USD",
                value: 1.00,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        props.history.push("/confirmation")
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      }
    })
    .render(paypal.current);
  }, [])

  return (
    <div>
      <div className="payment-options" ref={paypal}></div>
    </div>
  )
}

// class PayMe extends React.Component {

//   render() {
//     return (
//       <div className="payment-options" >
//         <h3>Good looks fam</h3>
//         <PayPalScriptProvider options={initialOptions}>
//             <PayPalButtons style={{ layout: "vertical" }} />
//         </PayPalScriptProvider>
//       </div>
//     )
//   }
// }

//export default PayMe;
