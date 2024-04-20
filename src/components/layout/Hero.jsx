import Image from "next/image";
import Right from "@/components/icons/Right";
import RightUp from "@/components/icons/RightUp";

export default function Hero() {
return (
    <section className="hero">
        <div className="py-4 px-8">
            <h1 className="text-4xl font-bold leading-normal">
                Life's better with a Pizza
                in your hand &nbsp;
                <span className="text-primary">ain't it?
                </span>

            </h1>
            <p className="my-4 text-gray-500 text-2xl font-semibold">
                pizza is that missing piece in your life. You'll find
                it here waiting for you
            </p>
            <div className="text-2xl flex gap-4 ">
                <button className="bg-primary  uppercase flex gap-2 text-white px-8 py-2 rounded-full">
                    Order Now
                    <Right/>
                </button>
                <button className="flex gap-2 py-2 text-gray-500">
                    Learn More
                    <RightUp/>
                </button>
            </div>
        </div>

        <div className="relative">
            <Image src={'/Pizza-1.jpg'}
                   layout={'fill'}
                   objectFit={'contain'}
                   alt={'Pizza'}
            />
        </div>
    </section>
)
}