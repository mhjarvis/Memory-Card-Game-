/* eslint-disable react/prop-types */
import "./SearchBox.css";

export default function SearchBox({
    gifQuery,
    handleSetGifQuery,
    updateImages,
}) {
    return (
        <>
            <label htmlFor="seach-query" className="search-query-label">
                Change Images:
            </label>
            <input
                className="search-query-input"
                id="seach-query"
                value={gifQuery}
                onChange={handleSetGifQuery}
            ></input>
            <button onClick={updateImages} className="search-query-button">Search</button>
        </>
    );
}
