'use client';

import Button from "../ui/button";

export default function ShowWorkBtn() {

    function handleClick() {
        const workSection = document.getElementById("projects");

        if (workSection) {
            workSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="mt-6">
            <Button label="View my Projects!" variant="secondary" onClick={handleClick} />
        </div>
    );
}