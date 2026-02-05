import "./SearchMentor.css";

export default function MentorSearchHero({
    searchKeyword,
    setSearchKeyword,
    selectedCategory,
    setSelectedCategory,
    onSearch
}) {

    const chips = [
        "All",
        "IT",
        "Marketing",
        "Finance",
        "Design",
        "Engineering",
        "Healthcare"
    ];

    return (
        <div className="mentorHero-container">

            <div className="mentorHero-card">

                <h1 className="mentorHero-title">
                    Master Your Future with Expert Mentorship
                </h1>

                <div className="mentorHero-searchBar">

                    <div className="mentorHero-inputGroup">
                        <input
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Search mentors..."
                        />
                    </div>

                    <button
                        className="mentorHero-findBtn"
                        onClick={onSearch}
                    >
                        Find Mentors
                    </button>

                </div>
            </div>

            <div className="mentorHero-chipRow">

                {chips.map((chip) => (
                    <div
                        key={chip}
                        className={`mentorHero-chip ${selectedCategory === chip ? "active" : ""}`}
                        onClick={() => setSelectedCategory(chip)}
                    >
                        {chip}
                    </div>
                ))}

            </div>
        </div>
    );
}
