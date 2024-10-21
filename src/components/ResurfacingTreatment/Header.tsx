import React from 'react';
import RefferalCard from "../UI/RefferalCard";

const Header: React.FC = () => (
    <>
        <RefferalCard
            img='https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649264978140-973ENKU0G5ILMXNVX0AT/unsplash-image-dhZtNlvNE8M.jpg?format=1000w'
            title='Resurfacing treatment Croydon'
            content1="What is a resurfacing peel or treatment, and how does it work?"
            content2="It’s very simply a chemical solution that can be applied to the skin. It is designed to give a deeper exfoliation than your average at-home scrub, to help actually peel off the damaged upper layer of skin to reveal new, revitalised skin underneath."
            content3={[
                "✔Reduce winkles, fine lines and sagging skin",
                "✔Improve skin quality",
                "✔Quick & pain-free"
            ]}
            content4={[
                "From £75 per session",
                "No. of sessions recommended: 3-6"
            ]} />
    </>
)

export default Header;
