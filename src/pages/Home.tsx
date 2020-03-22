import React from 'react';
import IUser from "../types/interfaces/IUser";

const home = (props:any) => {

    const user: IUser = { city: "London", country: "UK", displayName: "Shivakant Upadhyay", eligibleToWork: true, email: "eshivakant@gmail.com", nationality: "Indian", token: "dfghdsdgdfghdfghdfghdfg" };

    const userCopy: IUser = {...user, displayName:"Shiva"}

    return (
        <div className="container-fuild m-2">
            <h1>
                Home
            </h1>

            <div className="card shadow p-2">
                {
                    <span>{userCopy.displayName}</span>
                }
            </div>

        </div>
    );
}

export default home;