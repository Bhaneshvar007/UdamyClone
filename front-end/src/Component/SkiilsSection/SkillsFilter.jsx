import React, { useState } from "react";
import Filter01 from "./Filter01";

const SkillsFilter = () => {
    const [activeTab, setActiveTab] = useState("Data Science");

    const tabs = [
        "Data Science",
        "IT Certifications",
        "Leadership",
        "Web Development",
        "Communication",
        "Business Analytics & Intelligence",
    ];



    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-2">All the skills you need in one place</h1>
                <p className="text-gray-600 mb-4">
                    From critical skills to technical topics, Udemy supports your professional development.
                </p>

                {/* Tabs */}
                <div className="flex space-x-4 overflow-x-auto border-b pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-sm ${activeTab === tab
                                ? "border-b-2 border-black text-black font-semibold"
                                : "text-gray-500 hover:text-black"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>


                {/* Skills Card */}
                <Filter01 activeTab={activeTab} />

            </div>
        </div>
    );
};

export default SkillsFilter;