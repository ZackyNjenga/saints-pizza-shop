import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="relative">
                <div className="h-16 relative">
                    <Image src="/salad.jpeg"
                           layout={'fill'}
                           objectFit={'contain'}
                           alt="pizzasalad"  />
                </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-600 font-semibold ">Check out </h3>
                <h2 className="text-primary font-bold text-4xl italic ">Menu</h2>
            </div>
        </section>
    );
}