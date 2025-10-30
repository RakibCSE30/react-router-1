import PriceOption from "../PriceOption/PriceOption"



export default function PriceOptions() {

    const priceoptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29,
            "duration": "per month",
            "features": [
                "Access to all standard gym equipment",
                "Locker room and shower access",
                "Free Wi-Fi inside gym",
                "Fitness assessment at sign-up",
                "Access during staffed hours (6AM–10PM)",
                "One free guest pass per month",
                "Basic health tracking via mobile app",
                "Cancel anytime, no hidden fees"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49,
            "duration": "per month",
            "features": [
                "Unlimited gym access",
                "Access to all group fitness classes (Zumba, Yoga, HIIT, Spin)",
                "Monthly personal training session included",
                "Full sauna and steam room access",
                "Free towel and locker service",
                "Discount on gym merchandise (10%)",
                "Access to outdoor training zone",
                "Body composition analysis every 3 months",
                "Nutrition consultation once per quarter"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79,
            "duration": "per month",
            "features": [
                "24/7 access to all facilities",
                "Unlimited personal training sessions",
                "Access to CrossFit, Pilates, and advanced strength classes",
                "Free protein shake or smoothie after each workout",
                "Access to VIP lounge, massage room, and recovery ice bath",
                "Custom workout plan designed by certified trainer",
                "Smart locker with phone charging",
                "Priority support and class reservations",
                "Free gym merchandise starter kit",
                "Access to members-only events and challenges"
            ]
        },
        {
            "id": 4,
            "name": "Annual Membership",
            "price": 499,
            "duration": "per year",
            "features": [
                "Includes all Premium Plan benefits",
                "2 free guest passes every month",
                "Custom nutrition and meal plan updated quarterly",
                "Priority booking for all classes",
                "Exclusive annual member t-shirt",
                "Save 30% compared to monthly plans",
                "Dedicated personal coach for goal tracking",
                "Early access to new fitness programs",
                "Free physiotherapy consultation (once per year)"
            ]
        },
        {
            "id": 5,
            "name": "Couples Plan",
            "price": 99,
            "duration": "per month",
            "features": [
                "Full gym access for 2 members",
                "Shared personal training session twice a month",
                "Access to all standard and group classes",
                "Discounted nutrition consultation (50%)",
                "Free guest passes for family events",
                "Access to sauna and relaxation zone",
                "24/7 gym entry",
                "Special couples fitness workshops"
            ]
        },
        {
            "id": 6,
            "name": "One-Day Pass",
            "price": 9,
            "duration": "per day",
            "features": [
                "Full-day access to gym floor and equipment",
                "Locker and shower usage included",
                "Access to one group class (if available)",
                "Free pre-workout drink",
                "Trainer assistance for form correction",
                "No membership required"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h3 className="text-2xl mb-10">Best price in the town:</h3>
            <div className="grid grid-cols-3 gap-6 rounded-3xl text-white">
                {
                    priceoptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)

                }
            </div>

        </div>
    )
}
