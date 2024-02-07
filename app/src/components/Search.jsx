import React from 'react'

const Search = () => {
    return (
        <div className="input-group mb-3 mt-4">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>


    );
}

export default Search