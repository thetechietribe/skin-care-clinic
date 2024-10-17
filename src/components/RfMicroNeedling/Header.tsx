import React from 'react';
import RefferalCard from "../UI/RefferalCard";
const Header: React.FC = () => (
    <>
        <RefferalCard img='https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649264978140-973ENKU0G5ILMXNVX0AT/unsplash-image-dhZtNlvNE8M.jpg?format=1000w' title='RF Microneedling Croydon' content1="What is a RF microneedling, and how does it work?" content2="RF Microneedling is a microneedling facial treatment with the addition of radio frequency. It uses a device that can treat a variety of skin conditions in a safe and minally invasive way, with no numbing cream and minimal down time." content3={[
            "✔Reduce winkles, fine lines and sagging skin",
            "✔Improve skin quality",
            "✔Quick & pain-free"
        ]} content4={[
            "From £ Please Ask",
            "No. of sessions recommended: 3-6"
        ]} />
    </>
)

export default Header;
