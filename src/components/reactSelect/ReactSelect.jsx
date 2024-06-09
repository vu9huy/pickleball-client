import React, { useState } from "react";
import Select from "react-select";
import "./ReactSelect.css";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

const ReactSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
};

export default ReactSelect;