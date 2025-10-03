'use client';

import Button from "../ui/button";

export default function ShowWorkBtn() {

    function handleClick() {
        const workSection = document.getElementById("project");

        if (workSection) {
            workSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="mt-6">
            <Button label="View my Projects!" variant="secondary-disabled" onClick={handleClick} />
        </div>
    );
}