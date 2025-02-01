import Image from "next/image";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";

export default function Home() {
  const images = [
    "https://img.lazcdn.com/us/domino/39a6396b-50a6-4e5e-9caf-957e1b1f8533_BD-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/c471b1b2-365c-42f8-bd9c-32a35c29b603_BD-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/603cfdc5-5b7d-49e7-9c4e-0d45e1fb1253_BD-1976-688.jpg_2200x2200q80.jpg",
  ];
  return (
    <div className="container mx-auto mt-20 p-2 xl:px-36">
      <Banner />
    </div>
  );
}
