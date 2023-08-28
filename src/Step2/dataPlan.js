import { ReactComponent as Arcade } from "./icon-arcade.svg";
import { ReactComponent as Advanced } from "./icon-advanced.svg";
import { ReactComponent as Pro } from "./icon-pro.svg";

export const dataPlan = [
    {
        id: 1,
        icon: <Arcade />,
        name: "Arcade",
        priceMonthly: "$12/mo",
        priceYearly: "$90/yr"
    },
    {
        id: 2,
        icon: <Advanced />,
        name: "Advanced",
        priceMonthly: "$12/mo",
        priceYearly: "$120/yr"
    },
    {
        id: 3,
        icon: <Pro />,
        name: "Pro",
        priceMonthly: "$12/mo",
        priceYearly: "$150/yr"
    }
]