import { useEffect, useState } from "react";
import{useLocation} from"react-router-dom"

export default function Seccsesfull() {
    const location = useLocation()

    console.log(location)
    const [orderId, setOrderId] = useState(null);
    return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {orderId
            ? `Order has been created successfully. Your order number is ${orderId}`
            : `Successfull. Your order is being prepared...`}
          <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </div>
      );
    };
